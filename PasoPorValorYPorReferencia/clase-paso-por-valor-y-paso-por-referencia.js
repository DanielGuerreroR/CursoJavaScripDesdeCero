/* paso por valor */
let x = 1;
let y = "Hola";
let z = null;
/*creamos variables que asignamos el valor de
variables anteriores*/
let a = x;
let b = y;
let c = z;

console.log(x, y, z, a, b, c);

a = 12;
b = "platzi";
c = undefined;

/* paso por referencia */

let frutas = ["manzana"];
//agregar elementos al array con .push
frutas.push("pera");
console.log(frutas);

let panes = ["pan"];
let copiaDePanes = panes;
panes.push("baguette");
console.log(panes, copiaDePanes);
