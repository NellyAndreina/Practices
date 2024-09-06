//Media pirámide
//Ejercicio
//Crea una función llamada patronPiramide que reciba un número n como parámetro y muestre en la consola un patrón de asteríscos 
//creciente. El patrón debe tener n filas, y cada fila debe tener tantas estrellas como su número de fila. Ejemplos:
//patronPiramide(3);
// *
// **
// ***
//patronPiramide(5);
// *
// **
// ***
// ****
// *****
//La función no debe retornar valor alguno, utiliza console.log() para mostrar el patrón.
function patronPiramide (n){
    for (let i = 1; i <= n; i++){
        console.log('*'.repeat(i));
        }
    }
//Cuadrado
//Ejercicio
//Crea una función llamada cuadradoRelleno que reciba un número n como parámetro y muestre en la consola un cuadrado relleno 
//de asteriscos de lado n. Ejemplos:
//cuadradoRelleno(3);
// ***
// ***
// ***
//cuadradoRelleno(5);
// *****
// *****
// *****
// *****
// *****
//La función no debe retornar valor alguno, utiliza console.log() para mostrar el patrón.
    function cuadradoRelleno(n) {
        for (let i = 0; i < n; i++) {
            console.log('*'.repeat(n));
        }
    }
    //Línea por medio 
    //Ejercicio
    //Crea una función llamada lineasAlternadas que reciba dos números filas y columnas como parámetros y muestre en la consola un patrón de líneas alternadas de asteriscos.
    //Ejemplos:
    //lineasAlternadas(4, 5);
    // *****
    // 
    // *****
    // 
    //lineasAlternadas(3, 3);
    // ***
    // 
    // ***
    //La función no debe retornar valor alguno, utiliza console.log() para mostrar el patrón. Asegúrate de que tu función se ejecute correctamente incluso para casos donde el número de filas o columnas sea 1.
    function lineasAlternadas(filas, columnas) {
        for (let i = 0; i < filas; i++) {
            if (i % 2 === 0) { //el numero % 2 si el residio es igual a 0 el número es par
                console.log('*'.repeat(columnas));
            } else {
                console.log(' '.repeat(columnas));
            }
        }
    }
//Línea por medio parte 2
//Ejercicio
//Crea una función llamada lineasVerticalesAlternadas que reciba dos números filas y columnas como parámetros y muestre en la consola un patrón de líneas verticales alternadas con asteriscos y espacios.
//Ejemplos:
//lineasVerticalesAlternadas(3, 5);
// * * *
// * * *
// * * *
//lineasVerticalesAlternadas(4, 4);
// * * 
// * * 
// * * 
// * * 
//La función no debe retornar valor alguno, utiliza console.log() para mostrar el patrón. Asegúrate de que tu función se ejecute correctamente incluso para casos donde el número de filas o columnas sea 1.    
function lineasVerticalesAlternadas(filas, columnas) {
    for (let i = 0; i < filas; i++) {
        let linea = '';
        for (let j = 0; j < columnas; j++) {
            if (j % 2 === 0) {
                linea += '*';
            } else {
                linea += ' ';
            }
        }
        console.log(linea);
    }
}
//Cuadrado hueco
//Ejercicio
//Crea una función llamada cuadradoHueco que reciba un número n como parámetro y muestre en la consola un cuadrado hueco de asteriscos de lado n.
//Ejemplos:
//cuadradoHueco(3);
// ***
// * *
// ***
//cuadradoHueco(5);
// *****
// *   *
// *   *
// *   *
// *****
//La función no debe retornar valor alguno, utiliza console.log() para mostrar el patrón. Asegúrate de que tu función funcione correctamente incluso para cuadrados de lado 1 o 2.
function cuadradoHueco(n) {
    console.log('*'.repeat(n));
    for (let i = 0; i < n - 2; i++) {
        console.log('*' + ' '.repeat(n - 2) + '*');
    }
    if (n > 1) {
        console.log('*'.repeat(n));
    }
}
//Ejercicio
//Crea una función llamada diagonal_cuadrado que reciba un número n como parámetro y muestre en la consola la diagonal de un 
//cuadrado de lado n.
function diagonal_cuadrado(n) {
    for (let i = 0; i < n; i++) {
        console.log(' '.repeat(i) + '*');
    }
}

//Ejercicio
//Crea una función llamada media_piramide_izquierda que reciba un número altura como parámetro y muestre en la consola la parte izquierda de una pirámide con esa altura.
function media_piramide_izquierda(altura) {
    for (let i = 1; i <= altura; i++) {
        let espacios = ' '.repeat(altura - i);
        let asteriscos = '*'.repeat(i);
        console.log(espacios + asteriscos);
    }
}


