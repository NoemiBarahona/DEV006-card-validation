const tarjeta = document.querySelector('#tarjeta'),
  botonAbrirFormulario = document.querySelector('#boton-abrir-formulario'),
  formulario = document.querySelector('#formularioTarjeta'),
  numeroTarjeta = document.querySelector('#tarjeta .numero'),
  nombreTarjeta = document.querySelector('#tarjeta .nombre'),
  logoMarca = document.querySelector('#logo-marca'),
  firma = document.querySelector('#tarjeta .firma p'),
  mesExpiracion = document.querySelector('#tarjeta #expiracion .mes'),
  yearExpiracion = document.querySelector('#tarjeta .year'),
  ccv = document.querySelector('#tarjeta .ccv');
  
/**volteamos la tarjeta para mostrar el frente */ 
const mostrarFrente = (VoltearTarjeta) => {
  if(VoltearTarjeta.classList.contains('active')){
    VoltearTarjeta.classList.remove('active');
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
  const opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectMes.appendChild(opcion);
} 
  
/*--------Select del año--------*/
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i ++){
  const opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectYear.appendChild(opcion);
}
  
/*--------input numero de tarjeta--------*/
formulario.inputNumero.addEventListener('input', (e) => {
  limpiarInputTarjeta(e.target);
  const valorInput = e.target.value;
  const isValidTarjeta = validarTarjetaCredito(e.target.value);
  document.querySelector('#resultado').innerHTML = isValidTarjeta
  formulario.inputNumero.value = valorInput
    /*para eliminar los espacios en blancos*/
    /*Expresiones regulars https://regexr.com/ */
    .replace(/\s/g, '')
    /*Espacio cada 4 numeros */
    .replace(/([0-9]{4})/g, '$1 ')
    /**Elimina el ultimo espaciado */
    .trim();
  
  numeroTarjeta.textContent = valorInput;
  
  if(valorInput === ''){
    numeroTarjeta.textContent = '#### #### #### ####';
  
    logoMarca.innerHTML= '';
  }
  
  if(valorInput[0] === 4){
    logoMarca.innerHTML = '';
    const imagen = document.createElement('img');
    imagen.src = '../img/logos/visa.png';
    logoMarca.appendChild(imagen);
  } else if (valorInput[0] === 5){
    logoMarca.innerHTML = '';
    const imagen = document.createElement('img');
    imagen.src = '../img/logos/masterCard.png';
    logoMarca.appendChild(imagen);
  }
  /* voltear la tarjeta para que se vea el frente*/
  mostrarFrente(tarjeta);

});
  
/*--------input nombre de la tarjeta--------*/
formulario.inputNombre.addEventListener('keyup', (e) => {
  const valorInput= e.target.value;
  formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
  nombreTarjeta.textContent = valorInput;
  firma.textContent =valorInput;
  
  if(valorInput === ''){
    nombreTarjeta.textContent = 'Maria ';
  }
  
  mostrarFrente(tarjeta);
});
  
/*--------select mes-------*/
  
formulario.selectMes.addEventListener('change', (e) =>{
  mesExpiracion.textContent = e.target.value;
  mostrarFrente(tarjeta);
});
  
formulario.selectYear.addEventListener('change', (e) =>{
  yearExpiracion.textContent = e.target.value;
  mostrarFrente(tarjeta);
});
  
/*--------select ccv-------*/
  
formulario.inputCCV.addEventListener ('keyup', () => {
  if(!tarjeta.classList.contains('active')){
    tarjeta.classList.toggle('active');
  }
  
  formulario.inputCCV.value = formulario.inputCCV.value
    //Eliminar espacios
    .replace(/\s/g,'')
    //eliminar letras
    .replace(/\D/g, '');
  
  ccv.textContent = formulario.inputCCV.value;
});
