/*
 * EJERCICIO:
 * Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
 * en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
 * - Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición,
 *   recorrido, conversión a mayúsculas y minúsculas, reemplazo, división, unión,
 *   interpolación, verificación...
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos
 * - Anagramas
 * - Isogramas
 */

const palabra1 = "Dario";
const palabra2 = "Maciel";

// 1. Concatenación
const concatenacion = palabra1 + " " + palabra2;
const concatConTemplate = `${palabra1} ${palabra2}`;
const concatConMetodo = palabra1.concat(" ", palabra2);

// 2. Repetición
const repetida = palabra1.repeat(3);

// 3. Indexación (acceso a caracteres)
const primerCaracter = palabra1[0];
const segundoCaracter = palabra1.charAt(1);

// 4. Longitud
const longitud = palabra1.length;

// 5. Slicing (subcadenas)
const subcadena = palabra1.slice(1, 4);
const subcadena2 = palabra1.substring(1, 4);

// 6. Búsqueda
const indice = palabra1.indexOf('a');
const ultimoIndice = palabra1.lastIndexOf('i');
const existe = palabra1.includes('rio');
const empiezaCon = palabra1.startsWith('Dar');
const terminaCon = palabra1.endsWith('io');

// 7. Verificación
const esNumero = isNaN(palabra1);

// 8. Reemplazo
const reemplazada = palabra1.replace('io', 'ius');
const reemplazoGlobal = "a-a-a".replace(/a/g, 'b');

// 9. Mayúsculas y minúsculas
const mayusculas = palabra1.toUpperCase();
const minusculas = palabra1.toLowerCase();
const capitalizada = palabra1[0].toUpperCase() + palabra1.slice(1).toLowerCase();

// 10. Eliminación de espacios
const conEspacios = "  texto  ";
const sinEspacios = conEspacios.trim();
const sinInicio = conEspacios.trimStart();
const sinFin = conEspacios.trimEnd();

// 11. Relleno
const rellenada = palabra1.padStart(8, '-');
const rellenadaFin = palabra1.padEnd(8, '-');

// 12. División (string a array)
const dividida = palabra1.split('');
const palabras = "Dario Maciel".split(' ');

// 13. Unión (array a string)
const unida = ["D", "a", "r", "i", "o"].join('');
const unidaConSeparador = ["Dario", "Maciel"].join(' ');

// 14. Interpolación
const nombre = "Dario";
const edad = 30;
const mensaje = `Hola, soy ${nombre} y tengo ${edad} años.`;

// 15. Codificación
const codificado = encodeURIComponent("Dario Maciel");
const decodificado = decodeURIComponent("Dario%20Maciel");

// 16. Comparación
const igual = palabra1 === "Dario";
const diferente = palabra1 !== "dario";
const comparacion = palabra1.localeCompare(palabra2); // -1 (palabra1 antes que palabra2)

// Desafio extra: Palíndromos, Anagramas, Isogramas
function esPalindromo(string) {
    const quitarMayusculasEspacio = string.toLowerCase().replace(/\s+/g, '');
    const invertida = quitarMayusculasEspacio.split('').reverse().join('');
    if (quitarMayusculasEspacio === invertida) {
        console.log(`${string} es un palíndromo.`);
    } else {
        console.log(`${string} no es un palíndromo.`);
    };
}

esPalindromo("Neuquen");

function sonAnagramas(string1, string2) {
    const limpiar = (str) => str.toLowerCase().replace(/\s+/g, '').split('').sort().join('');
    if (limpiar(string1) === limpiar(string2)) {
        console.log(`${string1} y ${string2} son anagramas.`);
    } else {
        console.log(`${string1} y ${string2} no son anagramas.`);
    }
}

sonAnagramas("amor y roma", "Roma y amor");

function esIsograma(string) {
    const limpiar = (str) => str.toLowerCase().replace(/\s+/g, '');
    const caracteres = limpiar(string).split('');
    const conjuntoCaracteres = new Set(caracteres);
    
    if (conjuntoCaracteres.size === caracteres.length) {
        console.log(`${string} es un isograma.`);
    } else {
        console.log(`${string} no es un isograma.`);
    }
}

esIsograma("Dario Maciel");
esIsograma("Dario");