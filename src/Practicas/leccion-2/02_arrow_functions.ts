const calcularIMCArrow = (peso: number, altura: number): string => {
	const imc = peso / (altura * altura);

	if (imc < 18.5) {
		return 'Bajo peso';
	} else if (imc >= 18.5 && imc < 24.9) {
		return 'Peso normal';
	} else if (imc >= 25 && imc < 29.9) {
		return 'Sobrepeso';
	} else if (imc >= 30 && imc < 34.9) {
		return 'Obesidad tipo 1';
	} else if (imc >= 35 && imc < 39.9) {
		return 'Obesidad tipo 2';
	} else {
		return 'Obesidad tipo 3';
	}
};

// Ejemplo de uso
const peso = 50; // en kilogramos
const altura = 1.75; // en metros
const categoria = calcularIMCArrow(peso, altura);
console.log(`El IMC es ${categoria}`);

export {};
