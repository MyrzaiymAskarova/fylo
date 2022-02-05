// const button = document.querySelector('.header-burger');
// const menu = document.querySelector('.header-nav');
// const itemMenu = [...document.querySelectorAll('.nav-link')];
// const wrapper = document.querySelector('.wrapper-menu');
// let x = document.documentElement.clientWidth;
// const burger = document.querySelector('.header-burger');

// function getSizeWindow() {
//     x = document.documentElement.clientWidth;   
// }

// function clickMenu() {
//     if (x <= 768) {
//         menu.classList.toggle('header-nav');
//         menu.classList.toggle('header-nav-hide');
//         wrapper.classList.toggle('wrapper-menu-shadow');
//     }  
// }

// function activeBurger() {
//     burger.classList.toggle('header-burger');
//     burger.classList.toggle('header-burger-active');

// }

// button.addEventListener('click', clickMenu); 
// window.addEventListener('resize', getSizeWindow); 
// itemMenu.forEach((el) => el.addEventListener('click', clickMenu)); 


// burger.addEventListener('click', activeBurger); 
// itemMenu.forEach((el) => el.addEventListener('click', activeBurger)); 


if(!document.querySelector('style')) document.head.insertAdjacentHTML('beforeend', '<style></style>');
document.querySelector('style').innerHTML +='a {line-height: 1;display: inline-block;text-decoration:none;cursor: pointer;}a:after {display: block;content: "";height: 2px;width: 0%;background-color: hsl(170, 45%, 43%); transition: width .3s ease-in-out;}a:hover:after,a:focus:after {width: 100%;}';