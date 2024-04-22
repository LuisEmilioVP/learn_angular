// Ejercicio 1: Desestructuración Básica de Arreglos
const colores = ['Rojo', 'Verde', 'Azul', 'Amarillo', 'Morado'];

// Desestructuración para asignar los tres primeros colores a variables individuales
// const [color1, color2, color3] = colores;

// Imprimir las variables
// console.log('Primer color:', color1);
// console.log('Segundo color:', color2);
// console.log('Tercer color:', color3);

// Ejercicio 2: Desestructuración con Omisión de Elementos
const libroInfo = ['Cien años de soledad', 'Gabriel García Márquez', 1967];

// Desestructuración para extraer el título y el año de publicación, omitiendo el autor
// const [titulo, , anioPublicacion] = libroInfo;

// Imprimir el título y el año
// console.log('Título del libro:', titulo);
// console.log('Año de publicación:', anioPublicacion);

// Ejercicio 3: Desestructuración de Objetos Anidados
const estudiante = {
	nombre: 'Ana',
	edad: 22,
	universidad: {
		nombre: 'Universidad de Buenos Aires',
		ciudad: 'Buenos Aires',
	},
};

// Desestructuración para extraer el nombre del estudiante y el nombre de la universidad
const {
	nombre: nombreEstudiante,
	universidad: { nombre: nombreUniversidad },
} = estudiante;

// Imprimir el nombre del estudiante y el nombre de la universidad
// console.log('Nombre del estudiante:', nombreEstudiante);
// console.log('Nombre de la universidad:', nombreUniversidad);

// Ejercicio 4: Desestructuración en Parámetros de Función
const coche = { marca: 'Toyota', modelo: 'Corolla', año: 2020 };

// Definición de la función que utiliza la desestructuración en los parámetros
function imprimirMarcaYModelo({
	marca,
	modelo,
}: {
	marca: string;
	modelo: string;
}): void {
	console.log('Marca del coche:', marca);
	console.log('Modelo del coche:', modelo);
}

// Llamada a la función con el objeto coche
// imprimirMarcaYModelo(coche);

// Ejercicio 5: Desestructuración y Renombramiento
const direccion = {
	calle: 'Av. Siempre Viva',
	ciudad: 'Springfield',
	pais: 'EE.UU.',
};

// Desestructuración y renombramiento de las variables calle y ciudad a nombreCalle y nombreCiudad
const { calle: nombreCalle, ciudad: nombreCiudad } = direccion;

// Imprimir nombreCalle y nombreCiudad
console.log('Nombre de la calle:', nombreCalle);
console.log('Nombre de la ciudad:', nombreCiudad);

export {};
