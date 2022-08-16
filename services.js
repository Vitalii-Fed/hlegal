const menuLayer = document.querySelector('#menu_layer');
const menuClose = document.querySelector('#menu_close');
const menuOpenButton = document.querySelector('#menu_open_button');

menuOpenButton.addEventListener('click', () => {
    menuLayer.classList.add('menu_showed');
})

menuClose.addEventListener('click', () => {
    menuLayer.classList.remove('menu_showed');
})