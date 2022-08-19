const formLayer = document.querySelector('#form_layer');
const formClose = document.querySelector('#form_close');
const formOpenButton = document.querySelector('#form_open_button');

formOpenButton.addEventListener('click', () => {
    formLayer.classList.add('form_showed');
})

formClose.addEventListener('click', () => {
    formLayer.classList.remove('form_showed');
})