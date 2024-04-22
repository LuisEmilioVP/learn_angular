// Definición de la interfaz Producto
interface Producto {
	nombre: string;
	precio: number;
	categoria: string;
	stock: number;
}

// Definición de la función presentarProducto
function presentarProducto(producto: Producto): void {
	// Desestructuración para extraer las propiedades nombre, precio y categoria del objeto producto
	const { nombre, precio, categoria } = producto;

	// Imprimir una frase la describa el producto
	console.log(
		`El producto ${nombre} de la categoría ${categoria} tiene un precio de $${precio}.`
	);
}

// Ejemplo de un objeto producto
const productoEjemplo: Producto = {
	nombre: 'Smartphone',
	precio: 599.99,
	categoria: 'Electrónicos',
	stock: 50,
};

// Llamar a la función presentarProducto con el objeto producto de ejemplo
presentarProducto(productoEjemplo);
