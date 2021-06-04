'use strict';

//navbar transparent when its not scrolled down
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
if (window.scrollY > navbarHeight){
  navbar.classList.add('navbar--dark');
} else {
  navbar.classList.remove('navbar--dark');
}
});

//make twisted fate text disappear as you scroll
const home = document.querySelector('.title-title');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () =>{
  home.style.opacity = 1 - window.scrollY / homeHeight;
})