const animateElList = document.querySelectorAll('[data-animation');

if(animateElList.length){
    window.addEventListener('scroll', ()=>{
        runAnimation()
    })    
}


runAnimation()

function runAnimation(){
    var positionAnim = (window.innerHeight * 90) / 100

    animateElList.forEach((element)=>{
        if(positionAnim > element.getBoundingClientRect().top && element.getBoundingClientRect().top >0) element.classList.add('animate')
        else element.classList.remove('animate')
    })
}