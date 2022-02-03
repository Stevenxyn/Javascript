/* 
Estructura de datos []

tipos de metodos
como agregar elementos



https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

let frutas = ["Manzana" , "Peras" , "Platanos" , "Cerezas" , "Fresas"];
console.log(frutas.length); //Me dice la longitud del array
console.table(frutas); //Imprime una tabla por consola


let masFrutas = frutas.push("Uvas"); // Guardamos la longitud del array y agregamos de mas
frutas.push("Mandarinas"); //Agrega directo otra fruta de ultimas


let array1 = ["pera","manzana","mandarina"]
array1.pop() // elimina el ultimo elemento del array


let array1 = ["pera","manzana","mandarina"]
array1.unshift("Bananos") //Agrega elemento de primeras


let array1 = ["pera","manzana","mandarina"]
array1.shift()//Elimina el primer elemento del array


let array1 = ["pera","manzana","mandarina"]
array1.indexOf("mandarina")//Mostrara la posicion exacta del elemento que estemos poniendo


let array1 = ["pera","manzana","mandarina"]
pos = array1.indexOf("mandarina"); 
2
array1.splice(pos,2)// posision de inicio 2 = mandarina, segundo parameteo se cuenta normal 1 2 3 hasta donde queremos eliminar
['mandarina']

['pera', 'manzana']
array1.push("mandarina2")

array1.splice(pos,1)// pos tiene la posicion del elemento del array con splice se elimina si se tiene la posicion exacta
['mandarina2']


/* 
Con .splice() no solo se puede eliminar elementos del array, si no que también podemos
 extraerlos guardándolo en un nuevo array. ¡Ojo! que al hacer esto estaríamos modificando
  el array de origen.

*/


let vegetales = ['Repollo', 'Nabo', 'Rábano', 'Zanahoria']
console.log(vegetales)
// ["Repollo", "Nabo", "Rábano", "Zanahoria"]

let pos = 1, numElementos = 2

let elementosEliminados = vegetales.splice(pos, numElementos)
// ["Nabo", "Rábano"] ==> Lo que se ha guardado en "elementosEliminados"

console.log(vegetales)
// ["Repollo", "Zanahoria"] ==> Lo que actualmente tiene "vegetales" 





