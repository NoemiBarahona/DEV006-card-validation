const validator = {
  // ...
};

export default validator;

const tarjeta = document.querySelector('#tarjeta'),
      botonAbrirFormulario = document.querySelector('#boton-abrir-formulario');

tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});

botonAbrirFormulario.addEventListener('click',() => {
  botonAbrirFormulario.classList.toggle('active');
});