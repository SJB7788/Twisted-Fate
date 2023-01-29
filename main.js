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

//show button when scrolled down
const arrowUp = document.querySelector('.arrow__up');
document.addEventListener('scroll', ()=>{
  if(window.scrollY > homeHeight/2){
    arrowUp.classList.add('visible');
  }else{
    arrowUp.classList.remove('visible');
  }
});

//scroll up when button is clicked
arrowUp.addEventListener('click', (event)=>{
  const target = event.target;
  const link = target.dataset.link;
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior: 'smooth'});
});

