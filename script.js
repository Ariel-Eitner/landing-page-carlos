const navToggle = document.querySelector('.nav-toggle')
const navMenu = document.querySelector('.nav-menu')
const navMenu2 = document.querySelector('.nav-menu-2')
const nav = document.querySelector('.header');
const imgPrincipal = document.querySelector('.fondo')

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu_visible')
    navMenu2.classList.toggle('nav-menu_visible')
})


window.addEventListener('scroll', function(){
    nav.classList.toggle('active', window.scrollY > 0)
})
window.addEventListener('scroll', function(){
    imgPrincipal.classList.toggle('quitar-imagen', window.scrollY > 700)
    console.log(window.scrollY)
})