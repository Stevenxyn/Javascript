/* A modo de recopilación:

find() : Devuelve el primer elemento del array que cumpla con la condición dada
foreach() : Ejecuta lo que le definamos una vez por cada elemento de nuestro array
some() : Comprueba si al menos un elemento del array cumple con la condición que le damos
filter() : Devuelve todos los elementos del array que cumplan con la condición dada
Acá te dejo la documentación de cada uno: find() - foreach() - some() - filter()
 */

/*Se crea un array que contiene objetos dentro de el*/
var articulos = [
  { nombre: "bici", costo: 150000 },
  { nombre: "TV", costo: 250000 },
  { nombre: "Xbox", costo: 350000 },
  { nombre: "Movil", costo: 150000 },
  { nombre: "laptop", costo: 157400 },
  { nombre: "audifonos", costo: 70000 },
];

/*Filter ayuda a filtrar ciertas cosas, valida si es verdad o falso y guarda en otro array sin modificar el principal*/
/*articulosFiltrados aplicamos el metodo filtes el cual debemos acompañar de una funcion*/

var articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 70000;
});
articulosFiltrados;
/* [{ nombre: "audifonos", costo: 70000 }]; */

/*map genera un nuevo array sin modificar el anterior*/
var nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre;
});

nombreArticulos;
/* ["bici", "avion", "TV", "Xbox", "Movil", "laptop", "audifonos"]; */

/*foreach() */
articulos.forEach(function (articulo) {
  console.log(articulo.nombre);
});

/* "bici";
"TV";
"Xbox";
"Movil";
"laptop";
"audifonos"; */

/*some() */
var articulosBaratos = articulos.some(function (articulo) {
  return articulo.costo <= 70000;
});
articulosBaratos;

/* true; */
