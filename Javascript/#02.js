/*
 * EJERCICIO:
 * - Crea ejemplos de funciones básicas que representen las diferentes
 *   posibilidades del lenguaje:
 *   Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
 * - Comprueba si puedes crear funciones dentro de funciones.
 * - Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
 * - Pon a prueba el concepto de variable LOCAL y GLOBAL.
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *   (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 *
 * Presta especial atención a la sintaxis que debes utilizar en cada uno de los casos.
 * Cada lenguaje sigue una convenciones que debes de respetar para que el código se entienda.
 */

// Funciones basicas
// Funcion sin parametros ni retorno
function saludo() {
    console.log("Hola mundo");
}
saludo();
// Funcion con un parametro
function saludoConNombre(nombre) {
    console.log("hola " + nombre);
}
saludoConNombre("Dario");
// Funcion con varos parametros
function sumar(num1, num2) {
    console.log(num1 + num2);
}
sumar(10, 5);
// Funcion con retorno
function multiplicar(num1, num2) {
    return num1 * num2;
}
let valorFuncion = multiplicar(10, 5);
console.log(valorFuncion);
// Funcion dentro de otra 
function sumarConFuncion() {
    let num1 = multiplicar(5, 5);
    sumaFinal = num1 + 10;
    console.log(sumaFinal);
    return sumaFinal;
}
sumarConFuncion();
// Variables locales y globales
// Variables locales se declaran dentro de una funcion, no pueden ser llamadas fuera de ella
function funcionLocal() {
    let variableLocal = "variable local";
    console.log(variableLocal);
}
funcionLocal();
//console.log(variableLocal); //error, porque no esta declarada fuera de la funcion
// Variables globales pueden ser llamadas desde cualquier parte del codigo
let variableGlobal = "Variable global";
function funcionGlobal() {
    console.log(variableGlobal);

}
funcionGlobal();
// Ejercicio extra
function ejercicio(ruben, dario, max) {
    for (let i = 1; i <= max; i++) {
        
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(ruben + dario);
        }
        else if (i % 3 === 0) {
            console.log(ruben);
        }
        else if (i % 5 === 0) {
            console.log(dario);
        }
        else {
            console.log(i);
        }
}   
}
ejercicio("ruben", "dario", 100);