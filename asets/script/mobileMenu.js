var
    menuButton = document.querySelector('#menu-button'),
    menuNav = document.querySelector('#menu-nav');

addListenes()

function addListenes(){
   menuButton.addEventListener('click', onClick);
   window.addEventListener('resize', onResizePage)
}

function onClick(e){
    menuButton.classList.toggle('open');
    menuNav.classList.toggle('open')
}

function onResizePage(){
    if(!matchMedia('(max-width: 800px)').matches) resetMenu();
}

function resetMenu(){
    menuButton.classList.remove('open');
    menuNav.classList.remove('open')
}