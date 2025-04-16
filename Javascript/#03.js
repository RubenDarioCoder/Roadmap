/*
 * EJERCICIO:
 * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto
 *   en tu lenguaje.
 * - Utiliza operaciones de inserción, borrado, actualización y ordenación.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización
 *   y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
 *   y a continuación los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no numéricos y con más
 *   de 11 dígitos (o el número de dígitos que quieras).
 * - También se debe proponer una operación de finalización del programa.
 */

// Estructura de datos
// Array
// Creacion
let frutas = ['mazana', 'pera', 'naranja'];
// Insercion
frutas.push('banada'); // añade al final
frutas.unshift('uva'); // añade al pricipio
// Borrado 
frutas.pop(); // elinina el ultimo elemento
frutas.shift(); // elimina el primer elemento
// Actualizacion
frutas[1] = 'mandarina'; // reemplaza el elemenro en la posicion 1
// Ordenacion
frutas.sort(); // ordena alfababeticamente

// Objeto
let objeto = {
    nombre: 'Dario',
    edad: 31,
    apellido: 'Maciel'
}
// Insercion
objeto['email'] = 'dariomacielr@gmail.com'; // añade un nuevoe elemento
// Borrado
delete objeto.email; // elimina el elemento
// Actualizacion
objeto.nombre = 'Ruben Dario'; // reemplaza el valor del elemento
console.log(objeto);
// Set
let set = new Set([1, 2, 3, 4]);
set.add(5); // añade un nuevo valor
// Borrado 
set.delete(5); // elimina el valor
// Set no aplica actualizacion ni ordenacion
// Maps
let mapa = new Map([['nombre', 'Dario'], ['apellido', 'Maciel'], ['edad', 31]]);
// Insercion
mapa.set('email', 'dariomacielr@gmail.com'); // añade un nuevo elemento
// Borrrado 
mapa.delete('email'); // elimina el elemento
// Actualizacion
mapa.set('nombre', 'Ruben Dario'); // reemplaza el valor del elemento
// Map no aplica ordenacion
console.log(mapa);
// Agenda de contactos
// Importamos el módulo readline de Node.js
const readline = require('readline');

// Creamos una interfaz para leer entrada y escribir salida
const rl = readline.createInterface({
  input: process.stdin,  // Entrada desde la terminal
  output: process.stdout // Salida hacia la terminal
});

// Preguntamos al usuario por un número
rl.question('Introduce un número: ', (numero) => {
  // Convertimos la entrada a número (porque readline devuelve un string)
  const num = Number(numero);

  // Verificamos si es un número válido
  if (isNaN(num)) {
    console.log('¡Error! Debes introducir un número válido.');
  } else {
    console.log(`El resultado de ${num} + 4 es: ${num + 4}`);
  }

  // Cerramos la interfaz para que el programa termine
  rl.close();
});