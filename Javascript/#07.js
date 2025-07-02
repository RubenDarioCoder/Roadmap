/*
 * EJERCICIO:
 * Implementa los mecanismos de introducción y recuperación de elementos propios de las
 * pilas (stacks - LIFO) y las colas (queue - FIFO) utilizando una estructura de array
 * o lista (dependiendo de las posibilidades de tu lenguaje).
 *
 * DIFICULTAD EXTRA (opcional):
 * - Utilizando la implementación de pila y cadenas de texto, simula el mecanismo adelante/atrás
 *   de un navegador web. Crea un programa en el que puedas navegar a una página o indicarle
 *   que te quieres desplazar adelante o atrás, mostrando en cada caso el nombre de la web.
 *   Las palabras "adelante", "atrás" desencadenan esta acción, el resto se interpreta como
 *   el nombre de una nueva web.
 * - Utilizando la implementación de cola y cadenas de texto, simula el mecanismo de una
 *   impresora compartida que recibe documentos y los imprime cuando así se le indica.
 *   La palabra "imprimir" imprime un elemento de la cola, el resto de palabras se
 *   interpretan como nombres de documentos.
 */

let stack = [];

stack.push('elemento 1');
stack.push('elemento 2');
stack.push('elemento 3');

let lastElement = stack.pop();

console.log('Último elemento de la pila:', lastElement);

let queue = [];

queue.push('elemento 1');
queue.push('elemento 2', 'elemento 3');

let firstElement = queue.shift();
console.log('Primer elemento de la cola:', firstElement);

queue.push('elemento 4');
console.log('Cola actual:', queue);

/*
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
*/

let historial = [];
let adelante = [];

function navegar() {
    readline.question(
        'Ingrese URL o ("adelante", "atras", "exit"): ',
        (instruccion) => {
            if (instruccion === "exit") {
                console.log("Saliendo...");
                readline.close();
                return;
            }

            if (instruccion === "atras") {
                if (historial.length > 1) {
                    let anterior = historial.pop();
                    adelante.push(anterior);
                    console.log(`Página actual: ${historial[historial.length - 1]}`);
                } else {
                    console.log("No hay páginas anteriores.");
                }
            } else if (instruccion === "adelante") {
                if (adelante.length > 0) {
                    let avanzar = adelante.pop();
                    historial.push(avanzar);
                    console.log(`Página actual: ${avanzar}`);
                } else {
                    console.log("No hay páginas siguientes.");
                }
            } else {
                historial.push(instruccion);
                adelante = [];
                console.log(`Página actual: ${instruccion}`);
            }

            navegar(); // Llamada recursiva para seguir preguntando
        }
    );
}

//navegar();

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

let colaImpresion = []; // Cola de documentos

function manejarImpresora() {
    readline.question(
        'Ingrese un documento o "imprimir" para imprimir. ("salir" para terminar): ',
        (entrada) => {
            if (entrada.toLowerCase() === "salir") {
                console.log("Apagando la impresora...");
                readline.close();
                return;
            }

            if (entrada.toLowerCase() === "imprimir") {
                if (colaImpresion.length > 0) {
                    const documento = colaImpresion.shift(); // FIFO: Primero en entrar, primero en salir
                    console.log(`🖨️ Imprimiendo: "${documento}"`);
                    console.log(`📂 Cola actual: [${colaImpresion.join(", ")}]`);
                } else {
                    console.log("❌ No hay documentos en la cola de impresión.");
                }
            } else {
                colaImpresion.push(entrada);
                console.log(`📄 Documento "${entrada}" agregado a la cola.`);
                console.log(`📂 Cola actual: [${colaImpresion.join(", ")}]`);
            }

            manejarImpresora(); // Llamada recursiva para seguir preguntando
        }
    );
}

console.log("🖨️ Simulador de Impresora Compartida (FIFO)");
manejarImpresora(); // Iniciar