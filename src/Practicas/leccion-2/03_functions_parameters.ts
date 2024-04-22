function crearPerfilDeUsuario(
	nombre: string,
	edad: number,
	pais: string = 'No especificado'
): { nombre: string; edad: number; pais: string } {
	return {
		nombre,
		edad,
		pais,
	};
}

// Ejemplo de uso
const perfil1 = crearPerfilDeUsuario('Juan', 30, 'España');
console.log(perfil1);

const perfil2 = crearPerfilDeUsuario('María', 25);
console.log(perfil2);

export {};
