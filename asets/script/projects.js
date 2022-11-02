var
gallery = document.querySelector('#projects #gallery'),
wrapperList = document.querySelectorAll('.wrapper-cover'),
coverList = document.querySelectorAll('.cover');

    console.log(coverList[0])

wrapperList.forEach((el, index)=>{
    let
    galleryWidth = gallery.offsetWidth,
    wrapperWidth = el.offsetWidth,
    wrapperLeft = el.offsetLeft,
    wrapperRight = galleryWidth - wrapperLeft - wrapperWidth;

    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseout', onOut);

    if(wrapperLeft < wrapperWidth){
        el.setAttribute('position', 'left');
        coverList[index].classList.add('cover-lft');
    }
    else if(wrapperRight < 0){
        el.setAttribute('position', 'right');
        coverList[index].classList.add('cover-rgt');
    }
    else{
        el.setAttribute('position', 'between');
        coverList[index].classList.add('cover-btw');
    }
        console.log(el)
})

function onEnter(e){
    let 
    element = e.currentTarget,
    coverEl = element.querySelector('.cover'),
    position = element.getAttribute('position');

    if(!element.hasAttribute('coming-soon')){
        switch(position){
            case 'left':
                element.classList.add('wppr-cvr-lft-hvr');
                coverEl.classList.add('cover-hover');
                break;
            case 'between':
                element.classList.add('wppr-cvr-btw-hvr');
                coverEl.classList.add('cover-hover');
                break;
            case 'right':
                element.classList.add('wppr-cvr-rgt-hvr');
                coverEl.classList.add('cover-hover');
                break
            default: return;
        }
    }
    else{
    }

}

function onOut(e){
    let 
    element = e.currentTarget,
    coverEl = element.querySelector('.cover'),
    position = element.getAttribute('position');

    if(!element.hasAttribute('coming-soon')){
        switch(position){
            case 'left':
                element.classList.remove('wppr-cvr-lft-hvr');
                coverEl.classList.remove('cover-hover');
                break;
            case 'between':
                element.classList.remove('wppr-cvr-btw-hvr');
                coverEl.classList.remove('cover-hover');
                break;
            case 'right':
                element.classList.remove('wppr-cvr-rgt-hvr');
                coverEl.classList.remove('cover-hover');
                break
            default: return;
        }
    }
}