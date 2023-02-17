const paralaxList = document.querySelectorAll('.paralax');

//initialize the attributes
paralaxList.forEach(obj=>{
    obj.sensibility = obj.getAttribute('plx-sensi');
    obj.translateY = 0;
    obj.maxTranslateY = getExposedY(obj);
    obj.minTranslateY = 0;
    obj.lastClientTop= obj.getBoundingClientRect().top;
})

window.addEventListener('scroll', onScroll)

function onScroll(){
    paralaxList.forEach(obj=>{
        let translateY = -getTranslateY(obj);
        
        if(!checkInClient(obj.offsetParent) && obj.translateY == 0){
            console.log('foi')
            translateY = 0
        }
        else if(!checkInClient(obj.offsetParent)) translateY = obj.maxTranslateY;
        else if(translateY >= obj.maxTranslateY){
            translateY = obj.maxTranslateY;
        }

        obj.style.transform = `translateY(-${translateY}px)`;
        obj.translateY = translateY;
        obj.lastClientTop = obj.getBoundingClientRect().top;
    })
}

function getMovY(obj){
    return obj.lastClientTop - obj.getBoundingClientRect().top;
}

function getTranslateY(obj){
    const vall = window.innerHeight / getExposedY(obj);
    const res = obj.translateY + (getMovY(obj) / vall);

    return -res;
}

function getExposedY(obj){
    const parentHeight = obj.offsetParent.offsetHeight;
    const objHeight = obj.offsetHeight;

    return objHeight - parentHeight;
}

function checkInClient(obj){
    const clientTop = obj.getBoundingClientRect().top;
    const objHeight = obj.offsetHeight;
    const windowHeight = (window.innerHeight * 90) / 100;
    const isShowing = clientTop < windowHeight && clientTop > -objHeight;
    return isShowing;
}