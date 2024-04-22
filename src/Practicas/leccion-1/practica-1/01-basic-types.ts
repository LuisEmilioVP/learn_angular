//* Ejercicio 2: Declaracion de variables con tipos de datos básicos */

// Declara una variable nombre de tipo string y asígnale tu nombre.
export let nombre: string = 'Luis Emilio';
// Declara una variable edad de tipo number y asígnale tu edad.
export let edad: number = 22;
// Declara una variable estaActivo de tipo boolean para indicar si estás activo o no.
export let estaActivo: boolean = true;

console.log(
	`Mi nombre es: ${nombre}, tengo ${edad} anios y estoy seper ${estaActivo}`
);

//* Ejercicio 2: Uso de const y let */

// Declara una constante PI de tipo number y asígnale el valor 3.14.
const PI: number = 3.14;

console.log(`Valor del PI: ${PI}`);
// Intenta reasignar un nuevo valor a PI y observa el error.
// PI = 16.5 // No se puede asignar un nuevo valor a 'PI' porque es una constante

// Declara una variable contador con let que inicialmente sea 0 y luego increméntala.
let contador: number = 0;
contador++;

console.log(contador);

//* Ejercicio 3: Tipos Unión */

// Declara una variable identificador que pueda ser tanto number como string.
let identificador: number | string;
// Asigna un número y luego un string a identificador.
identificador = 22;
identificador = 'Mi edad';

//* Ejercicio 4: Arrays y Tuplas */
// Declara un array hobbies que contenga strings.
let hobbies: Array<string> = ['Escuchar música', 'leer', 'programar', 'ver anime'];
// Declara una tupla usuario que contenga un string (nombre) y un number (edad)
let usuario: [nombre: string, edad: number];
