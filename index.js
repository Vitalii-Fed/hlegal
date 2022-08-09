const form = document.querySelector('#layer');
const close = document.querySelector('#close');
const openButton = document.querySelector('#open_button');

openButton.addEventListener('click', () => {
    form.classList.add('form_showed');
})

close.addEventListener('click', () => {
    form.classList.remove('form_showed');
})