const validator = {
  // ...
};

export default validator;

const tarjeta = document.querySelector('#tarjeta'),
  botonAbrirFormulario = document.querySelector('#boton-abrir-formulario'),
  formulario = document.querySelector('#formularioTarjeta');

/*--------rotacion de la tarjeta-------*/
tarjeta.addEventListener('click', () => {
  tarjeta.classList.toggle('active');
});

/*--------boton de abrir formulario--------*/
botonAbrirFormulario.addEventListener('click',() => {
  botonAbrirFormulario.classList.toggle('active');
  formulario.classList.toggle('active');
});

/*--------Select del mes--------*/
for(let i = 1; i <=12; i++){
  let opcion = document.createElement('Option');
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectMes.appendChild(opcion);
} 

/*--------Select del año--------*/
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i ++){
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectYear.appendChild(opcion);
}
