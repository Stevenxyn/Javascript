/*
https://www.youtube.com/watch?v=qM9Rsv3LCWc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=27

Curso JavaScript: 26. Objeto console - #jonmircha

*/

//Tomar tiempo de tardanza ejecucion de codigo
console.time("Tardo esto: ");
const n = Array(100); // asi creas un array con tanta posiciones que deseemos
for (let i = 0; i < n.length; i++) {
  n[i] = i;
}

console.timeEnd("Tardo esto: ");
console.log(n);
n.shift();
console.log(n);
console.log(n.indexOf(66));

console.count("Sirve para contar las iteraciones de for o demas");



let x = 1,
y = 3,
pruebaXY = "Se espera que x siempre sea menor que Y";

console.assert(x<y {x,y,pruebaXY});