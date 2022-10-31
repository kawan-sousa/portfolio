var
wrapperList = document.querySelectorAll('.wrapper-cover'),
coverList = document.querySelectorAll('.cover');

wrapperList.forEach((el, index)=>{
    let
    width = parseFloat(getComputedStyle(el).width),
    left = el.offsetLeft;

    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseout', onOut);

 
    if(left < width){
        el.setAttribute('position', 'left')
    }
    else if(left > width){
        el.setAttribute('position', 'right')
    }
    else{
        console.log(left, typeof left, typeof width, width)
        el.setAttribute('position', 'betwen')
    }
})

function onEnter(e){
    e.currentTarget.classList.add('wrapper-cover-hover');
    e.currentTarget.querySelector('.cover').classList.add('cover-hover');
}

function onOut(e){
    e.currentTarget.classList.remove('wrapper-cover-hover');
    e.currentTarget.querySelector('.cover').classList.remove('cover-hover');
}