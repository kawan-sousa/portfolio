var
wrapperList = document.querySelectorAll('.wrapper-cover'),
coverList = document.querySelectorAll('.cover');

wrapperList.forEach((el, index)=>{
    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseout', onOut)
})

function onEnter(e){
    e.currentTarget.classList.add('wrapper-cover-hover');
    e.currentTarget.querySelector('.cover').classList.add('cover-hover');
}

function onOut(e){
    e.currentTarget.classList.remove('wrapper-cover-hover');
    e.currentTarget.querySelector('.cover').classList.remove('cover-hover');
}