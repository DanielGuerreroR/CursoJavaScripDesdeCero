/*Tipo de dato complejo - Paso por referencia */
let frutas = {
	naranja: "🍊",
};
let vegetales = frutas;
console.log(frutas, vegetales);

vegetales.naranja = "🥦";
console.log(frutas, vegetales);

//segundo ejercicio
let ropa = {
	blusa: "👚",
};

ropa.pantalon = "👖";
console.log(ropa);
