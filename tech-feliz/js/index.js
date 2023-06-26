'use strict';

//import faq from "./modules/faq.js";
//port header from "./modules/header.js";
//import slider from "./modules/slider.js";

window.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.header-nav__menu-icon');
  const closeIcon = document.querySelector('.header-nav__close-icon');
  const linksMenu = document.querySelector('.header-nav__link-list');
const header = document.querySelector('.header')
window.addEventListener('scroll', () => {
  header.classList.toggle('header--scroll', scrollY > 0);
})
  console.log(menuIcon)
  menuIcon.addEventListener('click', () => {
    linksMenu.classList.add('header-nav__link-list--open')
  });

  closeIcon.addEventListener('click', () => {
    linksMenu.classList.remove('header-nav__link-list--open')
  });

  linksMenu.addEventListener('click', (e) => {
    if (e.target.tagName ==='A') {
      linksMenu.classList.remove('header-nav__link-list--open');
    }
  });
});