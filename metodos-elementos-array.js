let numerosArrays = [6, 1, 10, 2, 3, 5, 7, 9];
/*Js ordena pero alfabeticamente ejemplo seria
a=1 b=2 c=3

Si el resultado es negativo, a se ordena antes que b.
Si el resultado es positivo, b se ordena antes de a.
Si el resultado es 0, nada cambia.
function(a, b) {return a - b}
*/
numerosArrays.sort(function (a, b) {
  return a - b;
});

/*sort() ordena ojo tener en cuenta que ordena alfabecicamente*/
let nombresArrays = ["rebeca", "ana", "carina", "zamara"];
nombresArrays.sort();

/*push() agrega uno o mas elementos al final del array esto funciona igual para los strings!*/
numerosArrays.push(99, 69);
numerosArrays;
/* [6, 1, 10, 2, 3, 5, 7, 9, 99, 69]; */

/*shift() elimina el primer elemento del array que inicia en posicion 0*/
numerosArrays;
numerosArrays.shift();
numerosArrays;

/* [6, 1, 10, 2, 3, 5, 7, 9];
(6)
[(1, 10, 2, 3, 5, 7, 9)]; */

/*pop() elimina el ultimo elemento del array*/
numerosArrays;
numerosArrays.pop();
numerosArrays;

/* [6, 1, 10, 2, 3, 5, 7, 9];
(9)
[(6, 1, 10, 2, 3, 5, 7)]; */
