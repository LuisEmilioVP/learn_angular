//* Ejercicio 1: Definir una Interfaz para un Personaje */

interface Personaje {
	nombre: string;
	puntosDeVida: number;
	habilidades: string[];
	puebloNatal?: string; // puede ser opcional
}

//* Ejercicio 2: Interfaz para Objetos con Propiedades Anidadas */

// Define una  interfaz que reprecenta un libro con autor anidado
interface Libro {
	titulo: string;
	anioPublicacion: number;
	autor: {
		nombre: string;
		nacionalidad: string;
	};
}

//* Ejercicio 3: Interfaz para Arrays de Objetos */

// Representar un empleado
interface Empleado {
	nombre: string;
	id: number;
	departamento: string;
}

// Crear un arreglo de empleados
const empleados: Empleado[] = [
	{ nombre: 'Juan', id: 1, departamento: 'Ventas' },
	{ nombre: 'María', id: 2, departamento: 'Recursos Humanos' },
	{ nombre: 'Pedro', id: 3, departamento: 'Desarrollo' },
];

// Iterar sobre el arreglo e imprimir la información de cada empleado
empleados.forEach((empleado) => {
	console.log('Nombre:', empleado.nombre);
	console.log('ID:', empleado.id);
	console.log('Departamento:', empleado.departamento);
	console.log('---------------------------');
});

//* Ejercicio 4: Extender Interfaces */
interface PersonajeExtendido extends Personaje {
	experiencia: number;
}

// Ejemplo de un personaje extendido
const personaje1: PersonajeExtendido = {
	nombre: 'Aragorn',
	puntosDeVida: 100,
	habilidades: ['Espada', 'Arco'],
	experiencia: 5000,
};

// Accediendo a las propiedades del personaje extendido
console.log('Nombre:', personaje1.nombre);
console.log('Puntos de Vida:', personaje1.puntosDeVida);
console.log('Habilidades:', personaje1.habilidades);
console.log('Experiencia:', personaje1.experiencia);

//* Ejercicio 5: Interfaz con Métodos */
interface CuentaBancaria {
	saldo: number;
	depositar(cantidad: number): void;
}

// Implementación de la interfaz
class MiCuenta implements CuentaBancaria {
	saldo: number;

	constructor(saldoInicial: number) {
		this.saldo = saldoInicial;
	}

	depositar(cantidad: number): void {
		this.saldo += cantidad;
		console.log(
			`Se depositaron ${cantidad} pesos. Nuevo saldo: ${this.saldo} pesos.`
		);
	}
}

// Crear una instancia de la cuenta bancaria
const cuenta = new MiCuenta(1000);

// Realizar un depósito
cuenta.depositar(500);
