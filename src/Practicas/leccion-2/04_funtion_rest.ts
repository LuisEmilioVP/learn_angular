function crearListaDeCompra(...articulos: string[]): {
	[articulo: string]: boolean;
} {
	const listaDeCompra: { [articulo: string]: boolean } = {};

	articulos.forEach((articulo) => {
		listaDeCompra[articulo] = false; // Inicialmente todos los artículos no han sido comprados
	});

	return listaDeCompra;
}

// Ejemplo de uso
const listaDeCompra = crearListaDeCompra('Manzanas', 'Plátanos', 'Leche', 'Pan');
console.log(listaDeCompra);

export {};
