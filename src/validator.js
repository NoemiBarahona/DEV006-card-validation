
export function isValid(numeroTarjeta) {
  // Eliminar cualquier carácter que no sea un dígito
  numeroTarjeta = numeroTarjeta.replace(/\D/g, "");
  // Invierta el orden de los dígitos en la cadena
  const invertirNumeroTarjeta = numeroTarjeta.split("").reverse().join("");

  // Recorra la cadena y duplique cada segundo dígito
  let sum = 0;
  for (let i = 0; i < invertirNumeroTarjeta.length; i++) {
    let digit = parseInt(invertirNumeroTarjeta[i], 10);

    if (i % 2 === 1) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
  }

  // Si la suma es divisible por 10, el número de tarjeta es válido
  return sum % 10 === 0;
}

export function isValidTarjeta(numeroTarjeta){
  // Comprobar si el número de tarjeta es válido para Visa o Mastercard 
  if (
    !/^4[0-9]{12}(?:[0-9]{3})?$/.test(numeroTarjeta) && // Visa
    !/^5[1-5][0-9]{14}$/.test(numeroTarjeta) // Mastercard
  ) {
    return false;
  }
}

export function maskify(textContent) {
  const numeroOculto = textContent.substring(0, textContent.length - 4).replace(/./g, "#") + textContent.substring(textContent.length - 4);
  return numeroOculto
}


export function espaciado(numeroOcultoEspaciado){
  const OcultaEspaciado = numeroOcultoEspaciado.replace(/(.{4})/g, '$1 ');
  return OcultaEspaciado
}

// export function isValid(numeroTarjeta) {
//   // Verifique que la entrada sea un número válido de Visa o Mastercard
//   if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(numeroTarjeta)) {
//     // Valida numero Visa tarjeta
//     return luhnCheck(numeroTarjeta);
//   } else if (/^5[1-5][0-9]{14}$/.test(numeroTarjeta)) {
//     // Valida numero Mastercard 
//     return luhnCheck(numeroTarjeta);
//   } else {
//     // Invalidar numero tarjeta
//     return false;
//   }
// }

// export function limpiarInputTarjeta (tarjetaInput) {
//   tarjetaInput.value = tarjetaInput.value.replace(/\D/g, '');
// }

// function luhnCheck(numeroTarjeta) {
//   let suma = 0;
//   let isEven = false;
  
//   // Comenzando desde el dígito más a la derecha, iterar sobre cada dígito en el número de tarjeta
//   for (let i = numeroTarjeta.length - 1; i >= 0; i--) {
//     let digit = parseInt(numeroTarjeta.charAt(i), 10);
    
//     // Duplicar cada segundo dígito
//     if (isEven) {
//       digit *= 2;
      
//       // Si el resultado es un número de dos dígitos, suma los dígitos
//       if (digit > 9) {
//         digit = (digit % 10) + 1;
//       }
//     }
    
//     // Añadir el dígito a la suma
//     suma += digit;
    
//     //Alternar la bandera isEven para el siguiente dígito
//     isEven = !isEven;
//   }
  
//   // El número tarjeta es válido si la suma es múltiplo de 10
//   return (suma % 10 === 0);
  
// }