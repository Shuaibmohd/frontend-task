const mobileMenu = document.getElementById('mobile-menu');
const menuBtn = document.getElementById('mobile-btn');

menuBtn.addEventListener('click', navToggle);


function navToggle(){
    this.classList.toggle('open')
    // document.body.classList.toggle('stop-scrolling');
    mobileMenu.classList.toggle('show-menu');
}