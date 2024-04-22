/**
 * Sistema de gestión bibliotecario
 *
 * Registro de libors
 * Buscar libros por titulo
 * Listar libros disponibles
 */

//* Definicion de la interfaz Libro
interface Libro {
	titulo: string;
	autor: string;
	anioPublicacion: number;
	estaDisponible: boolean;
}

//* Almacenar los libros de la biblioteca usando un Array
const biblioteca: Libro[] = [];

//* Funcion: agregar un nuevo libro a la biblioteca
function agregarLibro(
	titulo: string,
	autor: string,
	anioPublicacion: number,
	estaDisponible: boolean
): void {
	const nuevoLibro: Libro = {
		titulo: titulo,
		autor: autor,
		anioPublicacion: anioPublicacion,
		estaDisponible: estaDisponible,
	};
	biblioteca.push(nuevoLibro);
}

//* Funcion: buscar libros por su titulo
function buscarLibroPorTitulo(titulo: string): Libro | null {
	const libroEncontrado = biblioteca.find((libro) => libro.titulo === titulo);
	return libroEncontrado ? libroEncontrado : null;
}

//* Funcion para listar todos los libros disponibles en la biblioteca
function listarLibros(): void {
	console.log('Libros disponibles en la biblioteca');
	biblioteca.forEach((libro) => {
		if (libro.estaDisponible) {
			console.log(
				`Titulo: ${libro.titulo}, Autor: ${libro.autor}, Año de publicación: ${libro.anioPublicacion}`
			);
		}
	});
}

// Agregar libros a la biblioteca
agregarLibro('El Hobbit', 'J.R.R. Tolkien', 1937, true);
agregarLibro('1984', 'George Orwell', 1949, false);

// Buscar un libro por su titulo
const libroEncontrado = buscarLibroPorTitulo('El Hobbit');
console.log(libroEncontrado);

// Listar todos los libros disponibles en la biblioteca
listarLibros();
