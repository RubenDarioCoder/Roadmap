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
//console.log(objeto);
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
//console.log(mapa);
// Agenda de contactos

let agenda = new Map();

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu() {
  console.log("Seleccione una opcion:");
  console.log("1. Buscar contacto");
  console.log("2. Insertar contacto");
  console.log("3. Editar contacto");
  console.log("4. Eliminar contacto");
  console.log("5. Salir");
}




function buscarContacto() {
  rl.question('Ingrese el nombre del contacto a buscar: ', (contactoBuscado) => {
    if (agenda.has(contactoBuscado)) {
      console.log('Contacto encontrado:', contactoBuscado, 'Telefono:', agenda.get(contactoBuscado));
    } else {
      console.log('Contacto no encontrado.');
    }
    menu();
  });
}


function ingresarContacto () {
  rl.question('Ingrese el nombre del contacto: ', (contactoIngresado) => {
    rl.question('Ingrese el numero de telefono: ', (telefono) => {
      if (/^\d{1,11}$/.test(telefono)) {
        agenda.set(contactoIngresado, telefono);
        console.log(`Contacto ${contactoIngresado} agregado con exito.`);
        menu();
      } else {
        console.log('Numero de telefono no valido. Debe ser numerico y tener hasta 11 digitos.');
        ingresarContacto();
      }
    });
  });
}

function editarContacto() {
  rl.question('Ingrese el nombre del contacto a editar: ', (contactoEditar) => {
    if (agenda.has(contactoEditar)) {
      rl.question('Si quiere editar el nombre, ingrese 1, si quiere editar el telefono, ingrese 2: ', (opcionEdicion) => {
        switch (opcionEdicion) {
          case '1':
            rl.question('Ingrese el nuevo nombre: ', (nuevoNombre) => {
              let telefono = agenda.get(contactoEditar);
              agenda.delete(contactoEditar);
              agenda.set(nuevoNombre, telefono);
              console.log('Contacto editado exitosamente.');
              menu();
            });
            break;
          case '2':
            rl.question('Ingrese el nuevo teléfono: ', (nuevoTelefono) => {
              agenda.set(contactoEditar, nuevoTelefono);
              console.log('Teléfono actualizado exitosamente.');
              menu();
            });
            break;
          default:
            console.log('Opción no válida.');
            menu();
        }
      });
    } else {
      console.log('El contacto no existe.');
      menu();
    }
  });
}

function eliminarContacto() {
  rl.question('Ingrese el nombre del contacto a eliminar: ', (contactoEliminar) => {
    if (agenda.has(contactoEliminar)) {
      agenda.delete(contactoEliminar);
      console.log(`Contacto ${contactoEliminar} eliminado con éxito.`);
    } else {
      console.log('Contacto no encontrado.');
    }
    menu();
  });
}

function solicitarOperacion() {
  menu();
  rl.question('Ingrese la operacion que desea realizar: ', (opcion) => {
    switch (opcion) {
      case '1':
        buscarContacto();
        break;
      case '2':
        ingresarContacto();
        break;
      case '3':
        editarContacto();
        break;
      case '4':
        eliminarContacto();
        break;
      case '5':
        console.log('Saliendo del programa...');
        rl.close();
        break;
      default:
        console.log('Opcion no valida. Intente de nuevo.');
        solicitarOperacion();
    }
  });
}
solicitarOperacion();