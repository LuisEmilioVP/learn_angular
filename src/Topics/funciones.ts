//* Funciones

/**
 * Declaración de Funciones: En TypeScript, al igual que en JavaScript, puedes declarar una función utilizando la palabra clave function seguida del nombre de la función, paréntesis () que pueden incluir parámetros, y finalmente, las llaves {} que encierran el cuerpo de la función.
 */

function saludar(nombre: string): void {
	console.log('Hola ', +nombre);
}

//* Tipado de Parámetros
/**
 * Puedes especificar el tipo de cada parámetro en la declaración de la función para asegurarte de que se pasen los tipos de datos correctos cuando se llama a la función.
 */
function suma(numA: number, numB: number): number {
	return numA + numB;
}

//*Tipado de Retorno
/**
 * El tipo de retorno de una función se especifica después de los parámetros de la función. Si una función no retorna un valor, puedes usar el tipo void.
 */
function imprimirFecha(): void {
	console.log(new Date().toString());
}

//* Funciones Anónimas
/**
 * Las funciones también pueden ser anónimas, es decir, declaradas sin un nombre y posiblemente asignadas a una variable.
 */
let miFuncion = function (a: number, b: number, c: number): number {
	return a - b + c;
};
