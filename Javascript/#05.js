 /*
 EJERCICIO:
 * - Muestra ejemplos de asignación de variables "por valor" y "por referencia", según
 *   su tipo de dato.
 * - Muestra ejemplos de funciones con variables que se les pasan "por valor" y 
 *   "por referencia", y cómo se comportan en cada caso en el momento de ser modificadas.
 * (Entender estos conceptos es algo esencial en la gran mayoría de lenguajes)
 */

// Tipos de dato por valor
let myIntA = 10;
let myIntB = myIntA;
myIntB = 20;
console.log(myIntA); // 10
console.log(myIntB); // 20

// Tipos de dato por referencia
let myListA = [10, 20];
let myListB = myListA;
myListB.push(30);
console.log(myListA); // [10, 20, 30]
console.log(myListB); // [10, 20, 30]

// Funciones con datos por valor
function myIntFunc(myInt) {
    myInt = 20;
    console.log(myInt);
}

let myIntC = 10;
myIntFunc(myIntC); // 20
console.log(myIntC); // 10

// Funciones con datos por referencia
function myListFunc(myList) {
    myList.push(30);
    
    let myListD = myList;
    myListD.push(40);
    
    console.log(myList); // [10, 20, 30, 40]
    console.log(myListD); // [10, 20, 30, 40]
}

let myListC = [10, 20];
myListFunc(myListC);
console.log(myListC); // [10, 20, 30, 40]

//Extra

// Por valor
function swapValues(valueA, valueB) {
    let temp = valueA;
    valueA = valueB;
    valueB = temp;
    return [valueA, valueB];
}

let myIntD = 10;
let myIntE = 20;
let [myIntF, myIntG] = swapValues(myIntD, myIntE);

console.log(`${myIntD}, ${myIntE}`); // "10, 20"
console.log(`${myIntF}, ${myIntG}`); // "20, 10"

// Por referencia
function swapReferences(valueA, valueB) {
    let temp = valueA;
    valueA = valueB;
    valueB = temp;
    return [valueA, valueB];
}

let myListE = [10, 20];
let myListF = [30, 40];
let [myListG, myListH] = swapReferences(myListE, myListF);

console.log(`${myListE}, ${myListF}`); // "10,20, 30,40"
console.log(`${myListG}, ${myListH}`); // "30,40, 10,20"

// Nota importante: En JavaScript, los arrays se convierten a strings cuando se concatenan con strings
// Para mostrar mejor los arrays en el console.log, podríamos usar JSON.stringify()
console.log(JSON.stringify(myListE) + ", " + JSON.stringify(myListF)); // "[10,20], [30,40]"
console.log(JSON.stringify(myListG) + ", " + JSON.stringify(myListH)); // "[30,40], [10,20]"