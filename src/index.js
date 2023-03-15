import validator from './validator.js';

console.log(validator);

const tarjeta = document.querySelector('#tarjeta');

tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});