
const burgerMenu = document.querySelector('.header__burger');
const burgerMenuBackdrop = document.querySelector('.header__nav-backdrop');
const navElement = document.querySelector('.header__nav');

// burgerMenu.classList.add('header__burger_opened');
// burgerMenuBackdrop.classList.add('header__nav-backdrop_opened');
// navElement.classList.add('header__nav_opened');

function toggleBurgerMenu() {
  burgerMenu.classList.toggle('header__burger_opened');
  navElement.classList.toggle('header__nav_opened');
  burgerMenuBackdrop.classList.toggle('header__nav-backdrop_opened');
}

burgerMenu.addEventListener('click', toggleBurgerMenu);
burgerMenuBackdrop.addEventListener('click',toggleBurgerMenu);
