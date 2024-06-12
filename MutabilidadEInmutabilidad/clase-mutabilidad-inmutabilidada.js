//tipo de dato primitivo - inmutable
let numero = 23;
numero = numero + 10;
// console.log(numero);

let esVerdadero = true;
esVerdadero = false;
// console.log(esVerdadero);
/*aunque parece que modifica el valor en el resultado,
JavaScrip por debajo no cambia el valor, sino que 
crea un nuevo valor para esa variable y no cambia el original*/

//Tipo de dato complejo - mutable
let usuario = { nombre: "Pepito", edad: 15 }; //objeto
usuario.edad = 20;
console.log(usuario);

let frutas = ["manzana", "pera"]; //array
frutas[0] = "sandia";
console.log(frutas);

function cambiarNombre(objeto) {
	objeto.nombre = "nuevo nombre";
}
let persona = { nombre: "antonio" };
console.log(persona);
cambiarNombre(persona);
console.log(persona);

/*el valor original si muta y es cambiado por
el nuevo valor que ponemos, siendo reemplazado*/
