// var
// gallery = document.querySelector('#projects #gallery'),
// wrapperList = document.querySelectorAll('.wrapper-cover'),
// coverList = document.querySelectorAll('.cover');


// wrapperList.forEach((el, index)=>{
//     if(el.hasAttribute('coming-soon')) return
//     let
//     galleryWidth = gallery.offsetWidth,
//     wrapperWidth = el.offsetWidth,
//     wrapperLeft = el.offsetLeft,
//     wrapperRight = galleryWidth - wrapperLeft - wrapperWidth;

//     el.addEventListener('mouseenter', onEnter);
//     el.addEventListener('mouseout', onOut);

//     if(wrapperLeft < wrapperWidth){
//         el.setAttribute('position', 'left');
//         coverList[index].classList.add('cover-lft');
//     }
//     else if(wrapperRight < 0){
//         el.setAttribute('position', 'right');
//         coverList[index].classList.add('cover-rgt');
//     }
//     else{
//         el.setAttribute('position', 'between');
//         coverList[index].classList.add('cover-btw');
//     }
// })

// function onEnter(e){
//     let 
//     element = e.currentTarget,
//     coverEl = element.querySelector('.cover'),
//     position = element.getAttribute('position');

//     if(!element.hasAttribute('coming-soon')){
//         switch(position){
//             case 'left':
//                 element.classList.add('wppr-cvr-lft-hvr');
//                 coverEl.classList.add('cover-hover');
//                 break;
//             case 'between':
//                 element.classList.add('wppr-cvr-btw-hvr');
//                 coverEl.classList.add('cover-hover');
//                 break;
//             case 'right':
//                 element.classList.add('wppr-cvr-rgt-hvr');
//                 coverEl.classList.add('cover-hover');
//                 break
//             default: return;
//         }
//     }
//     else{
//     }

// }

// function onOut(e){
//     let 
//     element = e.currentTarget,
//     coverEl = element.querySelector('.cover'),
//     position = element.getAttribute('position');

//     coverEl.style = 'z-index: 1;';
//     setTimeout(()=>{coverEl.style = ''}, '500')
//     if(!element.hasAttribute('coming-soon')){
//         switch(position){
//             case 'left':
//                 element.classList.remove('wppr-cvr-lft-hvr');
//                 coverEl.classList.remove('cover-hover');
//                 break;
//             case 'between':
//                 element.classList.remove('wppr-cvr-btw-hvr');
//                 coverEl.classList.remove('cover-hover');
//                 break;
//             case 'right':
//                 element.classList.remove('wppr-cvr-rgt-hvr');
//                 coverEl.classList.remove('cover-hover');
//                 break
//             default: return;
//         }
//     }
// }

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
    let transitionDeleyStrg = window.getComputedStyle(currentWpprEl).getPropertyValue('transition-delay'),
    transitionDeleyNbr = parseFloat(transitionDeleyStrg.match(/\d/g).join(''))

    switch(checkPosition()){
        case 'left':
            currentWpprEl.classList.remove('hover');
            currentWpprEl.style = 'z-index: 1; overflow: visible;'
            setTimeout(()=>{currentWpprEl.style = '';}, `${transitionDeleyNbr}00`)
            break;
        case 'between':
            currentWpprEl.classList.remove('hover-btw');
            break;
        default:
            currentWpprEl.classList.remove('hover-rgt');
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