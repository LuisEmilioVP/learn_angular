//* Ejercicio 1: Definición Básica de Función */
function suma(a: number, b: number): number {
	return a + b;
}

// Uso de la función
const resultado = suma(5, 5);
console.log('El resultado de la suma es:', resultado);

//* Ejercicio 2: Parámetros Opcionales */
function numOptional(a: number, b?: number): number {
	if (b === undefined) {
		return a;
	} else {
		return a + b;
	}
}

// Uso de la función con parámetro opcional
console.log(numOptional(5)); // Devuelve 5
console.log(numOptional(5, 3)); // Devuelve 8

//* Ejercicio 3: Valor por Defecto para Parámetros */

function nultiplicacion(a: number, b: number = 10): number {
	return a * b;
}

// Uso de la función
console.log(nultiplicacion(5)); // Devuelve 50 (5 * 10)
console.log(nultiplicacion(5, 3)); // Devuelve 15 (5 * 3)

//* Ejercicio 4: Tipos de Retorno */
function sumaComoString(a: number, b: number): string {
	const suma = a + b;
	return suma.toString();
}

// Uso de la función
const result: string = sumaComoString(5, 3);
console.log(resultado); // Devuelve "8"
