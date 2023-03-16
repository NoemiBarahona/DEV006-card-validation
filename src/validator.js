const validator = {
  // ...
};

export default validator;

const tarjeta = document.querySelector('#tarjeta');

tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});