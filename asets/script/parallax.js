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
        paralaxElList.forEach((plxEl, i)=>{
            const verticalMov = calcVerticalMov(plxEl)
            console.log(verticalMov * sensibility)
            plxEl.element.style.transform = `translateY(-${verticalMov * sensibility}px)`;
        })
})

function calcVerticalMov(plxEl){
    const currentCltTop = plxEl.element.getBoundingClientRect().top;

    return plxEl.lastClientTop - currentCltTop;
}

