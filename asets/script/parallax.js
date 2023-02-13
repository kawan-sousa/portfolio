const paralaxNdList = document.querySelectorAll('.paralax');
const paralaxElList = objectArray(paralaxNdList);
const sensibility = .4; //set the sensibility of paralax efect

setDefaltAttr(paralaxElList);

// turns a NodeList in a object array and return this
function objectArray(nodeList){
    const array = Array.from(nodeList); // turns the nodeList into a array
    let objectArray =[];

    array.forEach((item, i)=>{
        objectArray.push({element: item});
    })
    return objectArray;
}

function setDefaltAttr(arrayObject){
    arrayObject.forEach(el=>{
        el.translateY = 0
        el.lastClientTop = paralaxElList[0].element.getBoundingClientRect().top;// set element client top
    })
}

window.addEventListener('scroll', ()=>{
        paralaxElList.forEach((plxEl)=>{
            if(getOffsetBottom(plxEl.element) < 0){
                plxEl.element.style.transform = 'translateY(0px)'
            };
            const verticalMov = calcVerticalMov(plxEl)
            plxEl.element.style.transform = `translateY(-${verticalMov * sensibility}px)`;
        })
})

function calcVerticalMov(plxEl){
    const currentCltTop = plxEl.element.getBoundingClientRect().top;

    return plxEl.lastClientTop - currentCltTop;
}

function getOffsetBottom(el){
    const parentEl = el.offsetParent;

    // get transformY of element
    const transform = window.getComputedStyle(el).transform;
    const translateY = new DOMMatrix(transform).m42;

    const bottom = el.offsetHeight - (parentEl.offsetHeight + translateY * -1)
    return bottom
}