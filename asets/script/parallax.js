const paralaxList = document.querySelectorAll('.paralax');

//initialize the attributes
paralaxList.forEach(obj=>{
    obj.sensibility = obj.getAttribute('plx-sensi');
    obj.translateY = 0;
    obj.minTranslateY = -getExposedY(obj);
    obj.maxTranslateY = 0;
    obj.lastClientTop= obj.getBoundingClientRect().top;
})

window.addEventListener('scroll', onScroll)

function onScroll(){
    paralaxList.forEach(obj=>{
        const translateY = -getMovY(obj);

        if(checkInClient(obj)) obj.style.transform = '';
        if(translateY > obj.maxTranslateY){
            obj.style.transform = `translateY(${obj.maxTranslateY}px)`;
            console.log('maxTranslateY');
            obj.translateY = translateY;
            return;
        }
        if(translateY < obj.minTranslateY){
            obj.style.transform = `translateY(${obj.minTranslateY}px)`;
            console.log('minTranslateY');
            obj.translateY = translateY;
            return;
        }
        obj.style.transform = `translateY(${translateY}px)`; //por que só funciona com o sinal de "-1"
        obj.translateY = translateY;
    })
}

function getMovY(obj){
    return obj.sensibility *(obj.lastClientTop - obj.getBoundingClientRect().top);
}

function getExposedY(obj){
    const parentHeight = obj.offsetParent.offsetHeight;
    const objHeight = obj.offsetHeight;

    return objHeight - parentHeight;
}

function checkInClient(obj){
    const clientTop = obj.getBoundingClientRect().top;
    const objHeight = obj.offsetHeight;
    const windowHeight = window.innerHeight;
    const isShowing = clientTop < windowHeight && clientTop > -objHeight;

    return isShowing
}