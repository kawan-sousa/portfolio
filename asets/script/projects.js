var
gallery = document.querySelector('#projects #gallery'),
innerWpprList = document.querySelectorAll('.wrapper-cover'),
coverList = document.querySelectorAll('.cover'),
currentWpprEl;

innerWpprList.forEach((el)=>{
    if(el.hasAttribute('coming-soon')) return;
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseout', onOut);
})

function onEnter(e){
    currentWpprEl = e.target;
    
    switch(checkPosition()){
        case 'left':
            currentWpprEl.classList.add('hover');
            break;
        case 'between':
            currentWpprEl.classList.add('hover-btw');
            break;
        default:
            currentWpprEl.classList.add('hover-rgt');
            break;
    }
    

}

function onOut(){
    const transitionDeleyStrg = window.getComputedStyle(currentWpprEl).getPropertyValue('transition-delay'),
    wrapperOut = currentWpprEl.closest('.wrapper-out');

    switch(checkPosition()){
        case 'left':
            currentWpprEl.classList.remove('hover');
            wrapperOut.style = 'z-index: 1;';
            setTimeout(()=>{wrapperOut.style = '';}, `1700`);
            break;
        case 'between':
            currentWpprEl.classList.remove('hover-btw');
            wrapperOut.style = 'z-index: 1;';
            setTimeout(()=>{wrapperOut.style = '';}, `1700`);
            break;
        default:
            currentWpprEl.classList.remove('hover-rgt');
            wrapperOut.style = 'z-index: 1;';
            currentWpprEl.style = 'left: initial;right: 0;';
            setTimeout(()=>{
                wrapperOut.style = '';
                currentWpprEl.style = ''
                }, `1700`);
            break;
    }
}

function checkPosition(){
    let
    wpprOut = currentWpprEl.closest('.wrapper-out')
    galleryWidth = gallery.offsetWidth,
    width = wpprOut.offsetWidth,
    left = wpprOut.offsetLeft,
    right = galleryWidth - (left + width);

    if(left < width) return 'left';
    else if(right < 0) return 'right';
    else return 'between';
}