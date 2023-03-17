/* eslint-disable eqeqeq */
const validator = {
  // ...
};

export default validator;

const tarjeta = document.querySelector('#tarjeta'),
  botonAbrirFormulario = document.querySelector('#boton-abrir-formulario'),
  formulario = document.querySelector('#formularioTarjeta'),
  numeroTarjeta = document.querySelector('#tarjeta .numero'),
  nombreTarjeta = document.querySelector('#tarjeta .nombre'),
  logoMarca = document.querySelector('#logo-marca'),
  firma = document.querySelector('#tarjeta .firma p');

/**volteamos la tarjeta para mostrar el frente */ 
const mostrarFrente = () => {
  if(tarjeta.classList.contains('active')){
    tarjeta.classList.remove('active');
  }
}

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
  let opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectMes.appendChild(opcion);
} 

/*--------Select del año--------*/
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i ++){
  let opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectYear.appendChild(opcion);
}

/*--------input numero de tarjeta--------*/
formulario.inputNumero.addEventListener('keyup', (e) => {
  let valorInput = e.target.value;

  formulario.inputNumero.value = valorInput
  /*para eliminar los espacios en blancos*/
  /*Expresiones regulars https://regexr.com/ */
    .replace(/\s/g, '')
  /*Eliminar las letras */
    .replace(/\D/g, '')
  /*Espacio cada 4 numeros */
    .replace(/([0-9]{4})/g, '$1 ')
  /**Elimina el ultimo espaciado */
    .trim();

  numeroTarjeta.textContent = valorInput;

  if(valorInput == ''){
    numeroTarjeta.textContent = '#### #### #### ####';

    logoMarca.innerHTML= '';
  }

  if(valorInput[0] == 4){
    logoMarca.innerHTML = '';
    const imagen = document.createElement('img');
    imagen.src = '../img/logos/visa.png';
    logoMarca.appendChild(imagen);
  } else if (valorInput[0] == 5){
    logoMarca.innerHTML = '';
    const imagen = document.createElement('img');
    imagen.src = '../img/logos/masterCard.png';
    logoMarca.appendChild(imagen);
  }
  /* voltear la tajerjeta para que se vea el frente*/
  mostrarFrente();
});

/*--------input nombre de tarjeta--------*/
formulario.inputNombre.addEventListener('keyup', (e) => {
  let valorInput= e.target.value;
  
  formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
  nombreTarjeta.textContent = valorInput;
  firma.textContent =valorInput;
});