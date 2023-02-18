const paralaxList = document.querySelectorAll('.paralax');

//initialize the attributes
window.onload = function (){

    paralaxList.forEach(obj=>{
    obj.sensibility = obj.getAttribute('plx-sensi');
    obj.translateY = 0;
    obj.maxTranslateY = getExposedY(obj);
    obj.minTranslateY = 0;
    obj.lastClientTop= obj.getBoundingClientRect().top;
    console.log('loaded', getExposedY(obj))
    })
}


window.addEventListener('scroll', onScroll)

function onScroll(){
    paralaxList.forEach(obj=>{
        let translateY = getTranslateY(obj);
        
        // if(!document.readyState === "complete") return;//if the page is not load this fiture not works
        if(!checkInClient(obj.offsetParent) && obj.getBoundingClientRect().top < 0){// if the elementWrapper is below the "client", the image has its start position defined (edge exposed on the Y-axis)
            translateY = obj.maxTranslateY;
            console.log('below');
        }
        else if(!checkInClient(obj.offsetParent) && obj.getBoundingClientRect().top > 0){//if the elementWrapper is above the "client", the image has its min translateY defined (negative valueedge exposed on the Y-axis)
            translateY = 0;
            console.log('above');
        }

        console.log(translateY, '/', obj.maxTranslateY);
        obj.style.transform = `translateY(-${translateY}px)`;
        console.log('passou')
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

    return res;
}

function getExposedY(obj){
    const parentHeight = obj.offsetParent.offsetHeight;
    const objHeight = obj.offsetHeight;

    console.log(objHeight, parentHeight, objHeight - parentHeight)
    return objHeight - parentHeight;
}

function checkInClient(obj){
    const clientTop = obj.getBoundingClientRect().top;
    const objHeight = obj.offsetHeight;
    const windowHeight = (window.innerHeight * 90) / 100;
    const isShowing = clientTop < windowHeight && clientTop > -objHeight;
    return isShowing;
}