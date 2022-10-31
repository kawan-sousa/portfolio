var
wrapperList = document.querySelectorAll('.wrapper-cover'),
coverList = document.querySelectorAll('.cover');

wrapperList.forEach((el, index)=>{
    el.addEventListener('mouseover', onHover)
})

function onHover(e){

}

console.log(document.querySelector('#cover-1').style);