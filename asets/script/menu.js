var
    menuLinks = document.querySelector('#links')
    menuButton = document.querySelector('#menu-button'),
    menuNav = document.querySelector('#menu-nav');

addListenes()

function addListenes(){
   menuButton.addEventListener('click', onClick);
   window.addEventListener('resize', onResizePage)
}

function onClick(e){
    menuButton.classList.toggle('open');
    menuButton.getAttribute('aria-expanded') == 'false' ? menuButton.setAttribute('aria-expanded', 'true') : menuButton.setAttribute('aria-expanded', 'false'); // add aceciblity to the button
    menuNav.classList.toggle('open')
}
function onResizePage(){
    if(!matchMedia('(max-width: 800px)').matches) resetMenu();
}

function resetMenu(){
    menuButton.classList.remove('open');
    menuNav.classList.remove('open')
}

// on scroll this script check if is to show or hidde menu
window.onscroll = function(e) {
    if(this.oldScroll < this.scrollY) menuLinks.classList.add('hidde');
    else menuLinks.classList.remove('hidde');
    this.oldScroll = this.scrollY;
  }