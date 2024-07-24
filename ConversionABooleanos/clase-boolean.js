//Declaraciones
const isActive = true;
const hasPermisson = false;

//Conversion implicita
const result = 5 > 3;
console.log(result);
const name = "Platzi";
console.log(!!name); //Señala si tiene un valor

//Conversion explicita
const value = 0;
const explicitBoolean = Boolean(value); //Transformando un valor a boleano
console.log(explicitBoolean);
