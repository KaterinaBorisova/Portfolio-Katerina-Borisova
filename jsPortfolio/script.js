let modal = document.querySelector('#myModal');
let certificat = document.querySelector('#myCertificats');
let span = document.querySelector('.close');

certificat.addEventListener('mouseover',() => {
modal.style.display = 'block';
gsap.from('#myModal', {opacity: 0, scale: 0, duration: .7, delay: .3, ease: 'power2.in'})
})
span.addEventListener('onclick',() =>{
    modal.style.display='none';
})
modal.addEventListener('click',() =>{
    modal.style.display = 'none';
})

let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__list');

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}

header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
}

const headerLinks = document.querySelectorAll('.header__link[data-goto]');
if (headerLinks.length > 0){
    headerLinks.forEach(headerLink => {
        headerLink.addEventListener('click',onMenuClick);
    });
    function onMenuClick(e){
        const headerLink = e.target;
        if (headerLink.dataset.goto && document.querySelector(headerLink.dataset.goto)){
            const gotoBlock = document.querySelector(headerLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.prevantDefault();
        }
    }
}