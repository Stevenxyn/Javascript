/* 
Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen
dos tipos de coerción:

Coerción implícita = gy6es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
Coerción explicita = es cuando obligamos a que cambie el tipo de valor.
*/

//Coerción Implícita

let implicita = 5 + "4";
console.log(implicita);

// Como resultado es 54 en STRING ya que el lenguaje ayudo a cambiar el tipo de valores y "+" concatena

let implicitaDos = 5 * "2";
console.log(implicitaDos);

//El resultado es 10 y deja en tipo Number

/* 
true = 1
false = 0
*/

//Coercion explicita

//Convierte explicitamente numeros a strings y visceversa 
 let a = String(20);
 let a = Number(20);

 