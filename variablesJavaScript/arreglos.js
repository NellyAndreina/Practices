//Ejercicio
//Crea una función llamada largoArreglo que reciba un parámetro llamado nombres. La función debe retornar el texto "muchos" 
//si hay más de 5 elementos en el arreglo, en caso contrario debe retornar "pocos".

function largoArreglo (nombres){
    if (nombres.length >= 5){
        return "muchos";
    } else {
        return "pocos";
    }
}

//Ejercicio
//Crea una función llamada ultimoYPrimero que reciba un arreglo y retorne la concantenación del último y 
//el primer elemento del arreglo.
function ultimoYPrimero(elemento) {
    const ultimoElemento = elemento[elemento.length - 1];
    const primerElemento = elemento[0];
    return ultimoElemento + primerElemento;
}

//Ejercicio
//Crea una función llamada agregarSi que reciba un arreglo y un parámetro llamado nombre. 
//La función debe agregar el nombre al arreglo si el largo del arreglo es menor a 5. La función debe retornar el arreglo.
function agregarSi(arreglo, nombre) {
    if (arreglo.length < 5) {
        arreglo.push(nombre); 
    }
    return arreglo; 
}

//Ejercicio
//Crea una función llamada limpiarYAgregar que reciba un arreglo y un parámetro llamado nombre. 
//La función debe limpiar el nombre removiendo los espacios vacíos al inicio y al final del nombre y luego agregar el nombre
//al final del arreglo. La función debe retornar el arreglo.
function limpiarYAgregar (arreglo, nombre){
    if (nombre.trim()) {
        arreglo.push(nombre); 
    }
    return arreglo; 
}

//Ejercicio
//Crea una función llamada reemplazar que reciba un arreglo y dos números. La función debe remplazar el primer elemento 
//del arreglo por el primer número y el último elemento del arreglo por el segundo número.
function reemplazar (arreglo, numeroUno, numeroDos){
    arreglo [0] = numeroUno; 
    arreglo [arreglo.length - 1] = numeroDos;
    return arreglo
}

//Ejercicio
//Crea una función llamada modificarPorElMayor que reciba un arreglo de números y dos parámetros llamado numero1 y numero2. 
//La función debe cambiar el primer elemento del arreglo por el mayor de los dos números.
function modificarPorElMayor (arreglo, numero1, numero2){                                                                                                                  
    const mayorNumero = Math.max(numero1, numero2);
        arreglo[0] = mayorNumero;
        return arreglo;
    }
//Ejercicio
//Crea una función llamada borrarAlFinal que reciba un arreglo y retorne el arreglo sin el último elemento.
function borrarAlFinal(arreglo) {
    arreglo.splice(arreglo.length - 1, 1);
    return arreglo;
}

//Ejercicio
//Crea una función llamada borrarYContarElementos que reciba un arreglo y un número (cantidad). 
//La función debe eliminar la cantidad de elementos especificados desde la posición 0 del arreglo y luego retornar 
//la cantidad de elementos del arreglo final.
function borrarYContarElementos(arreglo, cantidad) {
    arreglo.splice(0, cantidad);
    return arreglo.length;
}

//Ejercicio
//Crea una función llamada juntarArreglos que reciba dos parámetros, arreglo1 y arreglo2, y retorne un nuevo arreglo 
//con los elementos de ambos arreglos exlcuyendo el primer elemento de cada arreglo.
/* Escribe tu código aquí */
function juntarArreglos(arreglo1, arreglo2) {
    let nuevoArreglo1 = arreglo1.slice(1);
    let nuevoArreglo2 = arreglo2.slice(1);
    let resultado = nuevoArreglo1.concat(nuevoArreglo2);
    return resultado;
}
/* Fin */
console.log(juntarArreglos([10, 20, 30, 40], [50, 60, 70, 80]))
console.log(juntarArreglos(["a", "b", "c"], ["d", "e", "f"]))