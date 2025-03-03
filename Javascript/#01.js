/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 */

// Operadores aritméticos
let suma = 5 + 5;
let resta = 10 - 5;
let multiplicacion = 10 * 5;
let division = 10 / 5;
let modulo = 10 % 5;
let exponente = 2 ** 3;

// Operadores logicos

let and = true && false;
let or = true || false;
let not = !true;


// Operadores de comparacion 

let mayor = 7 > 5;
let menor = 5 < 8;
let mayorIgual = 7 >= 5;
let menorIgual = 5 <= 8;
let igual = 5 == 5;
let diferente = 5 != 5;

// Operadore de igualdad e identidad

let identidadIgual = 5 === "5";
let identidadDiferente = 5 !== 5;

// Operadores de asignacion

let asignacion = 5;
asignacion += 10;
asignacion -= 10;
asignacion *= 5;
asignacion /= 5;
asignacion %= 5;
asignacion **= 3; 

// Operadores de pertenencia

let estaEn = 4 in [1, 2, 3, 4 ,5]; // el indice 4 está en el array
let noEstaEn = 6 in [1, 2, 3, 4, 5]; // el indice 6 no está en el array
// Otra opcion de uso en objetos
let objeto = {nombre: "Dario", edad: 31, apellido: "Maciel"};
let estaEnObjeto = "nombre" in objeto;

// Operadores de tipo de dato

let tipo = typeof 5; // Sirve para saber el tipo de dato de una variable

// Estructuras de control

// Condicionales

let condicion = 10;
// If
if(condicion > 5){
    console.log("Es verdadero");
}
// If else
if(condicion % 2 === 0) {
    console.log("Es par");
}
else {
    console.log("Es impar");
}
// If else if
condicion = 10;
if(condicion > 10) {
    console.log("Es mayor a 10");
} else if(condicion < 10) {
    console.log("Es menor a 10");
} else {
    console.log("Es igual a 10");
}

// Swich
condicion = 3
switch(condicion) {
    case 1:
        console.log("Es 1");
        break;
    case 2:
        console.log("Es 2");
        break;
    case 3:
        console.log("Es 3")
        break;
    case 4:
        console.log("Es 4");
        break;
    case 5:
        console.log("Es 5");
        break;
    default:
        console.log("Numero del 1 al 5");
        break
}

// Iterativos
// For
for(let i = 0; i <5; i++) {
    console.log("Conteo: ", i);
}
// For each
let array = ['perro', 'gato', 'tigre', 'elefante', 'leon', 'mono']
array.forEach(numero =>
    console.log(numero));
// For of
for (let numero of array) {
    console.log(numero);
}
// For in
for (let valor in objeto) {
    console.log(valor);
}
// While
let contador = 0;
while (contador < 5){
    contador++
    console.log(contador);
}
// Do while
do {
    console.log(contador);
    contador ++;
} while (contador < 10);
