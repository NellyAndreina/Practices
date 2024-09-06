//Ejercicio
//Crea una función llamada mostrar que reciba un arreglo de números y que muestre en consola los primeros 3 números del arreglo. Considera que todos los casos de prueba tienen al menos 3 elementos.
//Ejemplo:
//mostrar([1, 2, 3, 4, 5, 6]) 
/* 
1
2
3 
*/
//mostrar([10, 20, 30, 40, 50, 60, 70]) 
/* 
10
20
30 
*/
//Tip: Recuerda que cuando se pide mostrar, no debes retornar nada, solo mostrar los datos utilizando console.log.
function mostrar(arreglo) {
    for (let i = 0; i < 3; i++) {
        console.log(arreglo[i]);
    }
}
//Ejercicio
//Utilizando for o while, crea una función llamada mostrarDatos que reciba un arreglo y un número n como parámetros y muestre en consola los primeros n elementos del arreglo donde n es el parámetro.
function mostrarDatos(arreglo, n) {
    for (let i = 0; i < n; i++) {
        console.log(arreglo[i]);
    }
}
//Ejercicio
//Crea una función llamada mostrarDatos que reciba un arreglo y dos números como parámetros.
//La función debe mostrar en consola los elementos del arreglo desde la posición indicada por el primer número hasta, pero sin incluir, la posición del segundo número.
function mostrarDatos(arreglo, inicio, fin) {
    for (let i = inicio; i < fin; i++) {
        console.log(arreglo[i]);
    }
}

//Ejercicio
//Crea una función llamada mostrarDatosAlReves que reciba un arreglo y que muestre en consola los datos del arreglo en orden inverso.
function mostrarDatosAlReves(arreglo) {
    for (let i = arreglo.length - 1; i >= 0; i--) {
        console.log(arreglo[i]);
    }
}
//Ejercicio
//Modifica la siguiente función para que se muestren los datos de un arreglo en el siguiente formato: "El valor en la posición 0 es 1".
function mostrarDatoEIndice(datos) {
    for (let i = 0; i < datos.length; i++) { 
      console.log("El valor en la posición " + i + " es " + datos[i]); 
    }
  }
//Ejercicio
//Crea una función llamada mostrarPares que reciba un arreglo y muestre los números pares del arreglo recibido.
  function mostrarPares(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] % 2 === 0) {
        console.log(arreglo[i]);
      }
    }
  }
//Ejercicio
//Crea una función llamada mostrarLasPalabrasQueEmpiezanConA que reciba un arreglo de palabras y muestre las palabras que empiezan con la letra "a".
  
//Ejemplo
//MostrarLasPalabrasQueEmpiezanConA(["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit"])
  /*
  amet
  adipiscing
  */
  function mostrarLasPalabrasQueEmpiezanConA(palabras) {
    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i].charAt(0).toLowerCase() === 'a') {
        console.log(palabras[i]);
      }
    }
  }
//Ejercicio
//Crea una función llamada mostrarLasPalabrasQueEmpiezanConA que reciba un arreglo de palabras y muestre las palabras que empiezan con la letra "a".
  function mostrarLasPalabrasQueEmpiezanConA(palabras) {
    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i].charAt(0).toLowerCase() === 'a') {
        console.log(palabras[i]);
      }
    }
  }
//Ejercicio
//Crea una función llamada palabras que reciba un arreglo de palabras y una letra. El programa debe mostrar en consola las palabras que empiecen con la letra recibida.
  function palabras(arreglo, letra) {
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i].charAt(0).toLowerCase() === letra.toLowerCase()) {
        console.log(arreglo[i]);
      }
    }
  }
  //Ejercicio
  //Crea una función llamada mostrarCada2 que reciba un arreglo y que muestre una de cada dos palabras. 
  //Tip 1: Recuerda que cuando se pide mostrar, no debes retornar nada, solo mostrar los datos utilizando console.log. Tip 2: Puedes utilizar el índice para saber si es una posición par o impar, para este propósito el número 0 puedes considerarlo como número par. 
  function mostrarCada2(arreglo) {
    for (let i = 0; i < arreglo.length; i += 2) {
      console.log(arreglo[i]);
    }
  }

  function mostrarCada2(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
      if (i % 2 === 0) {  // Verifica si el índice es par (considerando el índice 0 como par)
        console.log(arreglo[i]);
      }
    }
  }