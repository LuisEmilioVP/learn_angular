// Introducción con TypeScript

/*
 *Tipos de Datos Básicos en TypeScript
 */

// Boolean: El tipo más simple en TypeScript, true o false.
let estaActivo: boolean = true;

/**
 * Number: Todos los números en TypeScript son de punto flotante. TypeScript también soporta representaciones hexadecimales, binarias y octales.
 */

let entero: number = 6;
let hex: number = 0xf00d;
let binario: number = 0b1010;
let octal: number = 0o744;

/**
 * String: Para texto, TypeScript utiliza el tipo string. Puedes usar comillas simples ('), dobles (") o backticks (`) para definir cadenas de texto.
 */
let color: string = 'azul';
let saludo: string = `Hola, mi color favorito es ${color}`;

/**
 * Array: TypeScript permite definir arrays de dos formas: utilizando el tipo de los elementos seguido de [], o utilizando un arreglo genérico Array<tipo>.
 */
let listaNumeros: number[] = [1, 2, 3, 4, 5];
let listaNombre: Array<string> = ['Juan', 'Pedro', 'Maria', 'Beto'];

/**
 * Any: Para variables que pueden cambiar de tipo o que no sabemos de qué tipo serán. Se recomienda evitar su uso para aprovechar las ventajas del tipado fuerte de TypeScript.
 */
let noEstoySeguro: any = 4;
noEstoySeguro = 'Hora sera una cadena';
noEstoySeguro = false; // ahora es booleano

/**
 * Void: Usado en funciones que no retornan ningún valor.
 */

function advertirUsuario(): void {
	console.log('Esta es una advertencia');
}

/**
 * Null y Undefined: TypeScript tiene dos tipos para valores nulos: null y undefined. Por defecto, son subtipos de todos los demás tipos.
 */

let u: undefined = undefined;
let n: null = null;

/*
 * Tipos de Datos Avanzados en TypeScript
 */

/**
 * Los Tipo Union permite que una variable que tenga más de un tipo. Esto es útil cuando una variable puede aceptar diferentes tipos de valores.
 */
let identificador: string | number;
identificador = 10; // valido
identificador = 'ptr'; // valido
// identificador = true; El tipo 'true' no se le puede asignar al tipo string | number

/**
 * Un tipo Intersection combina múltiples tipos en uno. Esto es útil cuando quieres que un objeto tenga todas las propiedades de varios tipos.
 */
interface Nombre {
	nombre: string;
}

interface Edad {
	edad: number;
}

type Persona = Nombre & Edad;

const persona: Persona = {
	nombre: 'Juaa',
	edad: 17,
};

/**
 * Un Enum (enumeración) es una forma de organizar un conjunto de valores relacionados. Facilita el manejo de constantes nombradas y mejora la legibilidad del código.
 */

enum Direccion {
	Arriba,
	Abajo,
	Izquierda,
	Derecha,
}

let direccion: Direccion = Direccion.Arriba;

/**
 * Un Tuple permite expresar un arreglo con un número fijo de elementos cuyos tipos son conocidos, pero no necesariamente iguales.
 */
let usuario: [string, number];
usuario = ['Juan', 25]; // válido
// usuario = [25, 'Juan']; // Error: el tipo de dato no coincide
