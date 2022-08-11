const formLayer = document.querySelector('#form_layer');
const formClose = document.querySelector('#form_close');
const formOpenButton = document.querySelector('#form_open_button');

formOpenButton.addEventListener('click', () => {
    formLayer.classList.add('form_showed');
})

formClose.addEventListener('click', () => {
    formLayer.classList.remove('form_showed');
})

const menuLayer = document.querySelector('#menu_layer');
const menuClose = document.querySelector('#menu_close');
const menuOpenButton = document.querySelector('#menu_open_button');

menuOpenButton.addEventListener('click', () => {
    menuLayer.classList.add('menu_showed');
})

menuClose.addEventListener('click', () => {
    menuLayer.classList.remove('menu_showed');
})