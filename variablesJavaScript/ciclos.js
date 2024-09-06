//Ejercicio
//Crea una función llamada contarHasta que reciba un número como parámetro y que muestre en consola los números del 1 al número
// ingresado.

function contarHasta(numero) {
    let i = 1;
    while (i <= numero) {
        console.log(i);
        i++;
    }
}

//Ejercicio
//El siguiente es un ejercicio de intuición y lógica. Sí necesitaramos ahora crear un función que partiera desde un número distinto a 1, ¿Qué cambio harías en el codígo?
//Crea una función llamada desdeHasta que reciba 2 parámetros, desde y hasta. Muestra en consola todos los números entre medio. Por ejemplo:
//desdeHasta(5, 10)
//5
//6
//7
//8
//9
//10
function contarDeDosEnDos(numero) {
    let i = 2;
    while (i <= numero) {
        console.log(i);
        i += 2;
    }
}

//Ejercicio
//Crea una función llamada contarDeDosEnDos que reciba un número como parámetro. La función debe mostrar todos los números pares
// entre 1 y el número dado.
function contarDeDosEnDos(numero) {
    let i = 2;
    while (i <= numero) {
        console.log(i);
        i += 2;
    }
}

//contarDeDosEnDos(10)
//contarDeDosEnDos(6)
//contarDeDosEnDos(14)

//Ejercicio
//El siguiente código está incompleto y por lo mismo produce un ciclo infinito. 
//Ejecútalo para que veas el error.
//Luego, complétalo para que muestre en consola los números del 1 al 10.
let contador = 1
while (contador <= 10) {
    console.log(contador) 
contador++;
}

//Ejercicio
//El siguiente código está incompleto y por lo mismo produce un ciclo infinito. 
//Complétalo para que muestre los números del 4 al 8.
let contador = 4
while (contador <= 8) {
  console.log(contador)
  contador = contador + 1
  }

//  Ejercicio con while
//Crea una función llamada sumarHasta que reciba un número como parámetro.
//La función debe retornar la suma de los números del 1 al número ingresado.
//Por ejemplo, si el número ingresado es 5, la función debe retornar 15. Si el número ingresado es 10, la función debe retornar 55.
  function sumarHasta(numero) {
    let suma = 0;        
    let contador = 1;    
    while (contador <= numero) {  
        suma += contador;        
        contador++;              
    }
    return suma;  
}

//  Ejercicio con while
//Crea una función llamada sumarDeDosEnDos que reciba dos parámetros, desde y hasta. La función debe retornar la suma 
//de los números.
function sumarDeDosEnDos(desde, hasta) {
    let suma = 0;
    let contador = desde;
    while (contador <= hasta) {  
        suma += contador; 
        contador += 2;
    }
    return suma;  
}

//Ejercicio
//Crea una función llamada productoria que reciba un número como parámetro y retorne la productoria de los números 
//del 1 al número ingresado.
//Por ejemplo, si el número ingresado es 5, la función debe retornar 120. Si el número ingresado es 10, la función 
//debe retornar 3628800.
function productoria(num) {
    let producto = 1;
    let contador = 1;  

    while (contador <= num) {
        producto *= contador;
        contador++;
    }

    return producto;
}
//Ejercicio
//Crea una función llamada introduccionAFor que muestre en consola los números del 1 al 15 utilizando la instrucción for.
function introduccionAFor() {
    for (let i = 1; i <= 15; i++) {
        console.log(i);
    }
}

//Ejercicio - for
//Crea la función mostrarNumeros que reciba dos parámetro, inicio y fin.
//La función debe mostrar en consola todos los números desde el inicio hasta el fin.ç
function mostrarNumeros(inicio, fin) {
    for (let i = inicio; i <= fin; i++) { 
        console.log(i);  
    }
}

//Ejercicio
//Utilizando la estructura de un ciclo for, muestra los números del 10 al 1.
for (let i = 10; i >= 1; i--) {  
    console.log(i);  
}

//Ejercicio
//Crea una función llamada sumatoriaPares que reciba un número como parámetro y retorne la sumatoria de los números pares 
//desde el 1 hasta el número ingresado.
function sumatoriaPares(num) {
    let suma = 0;
    for (let i = 2; i <= num; i += 2) {
        suma += i;
    }
    return suma;
}