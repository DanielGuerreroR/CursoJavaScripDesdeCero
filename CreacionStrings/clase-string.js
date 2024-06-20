//creacion de strings
const primeraOpcion = "Comillas simples";
const segundaOpcion = "Comillas Dobles";
const terceraOpcion = `Comillas Ladeadas`;

//concatenacion = juntar 2 strings
//1. concatenacion con +
const direccion = "calle falsa 1223";
const ciudad = "springfield";
const direccionCompleta = "Mi direccion completa es " + direccion + ciudad;
//esta concatenacion da problemas con el espacio, al concatenar 2 strings salen juntos
console.log(direccionCompleta);
//como arreglar el espacio
const direccionCompletaConEspacio =
	"Mi direccion completa es " + direccion + " " + ciudad;
console.log(direccionCompletaConEspacio);

//2. concatenacion con Template Literals
const nombre = "Estefany";
const pais = "Colombia";
const presentacion = `Hola, soy ${nombre} de ${pais}`;
console.log(presentacion);

//3. concatenacion con join() metodo de string
const primeraParte = "Me encanta";
const segundaParte = "la gente de";
const terceraParte = "mexico";
const pensamiento = [primeraParte, segundaParte, terceraParte];
console.log(pensamiento.join(" "));
//junta las partes y con join se agrega un ' ' espacio al juntarlas, se pude poner lo que desee

//4. concatenacion con concat()
const hobbie1 = "Dibujar";
const hobbie2 = "Videojuegos";
const hobbie3 = "Estudiar";
const hobbies = "Mis hobbies son: ".concat(
	hobbie1,
	", ",
	hobbie2,
	", ",
	hobbie3,
	"."
);
console.log(hobbies);
