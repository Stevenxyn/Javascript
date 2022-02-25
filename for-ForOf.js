var marcas = ["Audi", "BMW", "Porsche", "Mercedez Benz"];

function mostrarMarca(marca) {
  console.log(`Tenemos la siguiente marca: ${marca}`);
}
/* 
marcas: plurales muchos
marca: singular de a 1
*/
for (var i = 0; i < marcas.length; i++) {
  mostrarMarca(marcas[i]);
}

/* 
Resultado
Tenemos la siguiente marca: Audi
Tenemos la siguiente marca: BMW
Tenemos la siguiente marca: Porsche
Tenemos la siguiente marca: Mercedez Benz 
*/

/*
Ejemplo
*/

let frutas = ["Manzana", "Banano", "Pera"];

function callFruits(fruit) {
  console.log(`Esta es una : ${fruit}`);
}

for (i = 0; i < frutas.length; i++) {
  callFruits(frutas[i]);
}

/*
Ejemplo 2
*/

let heroes = ["Fanny", "Franco", "Granger", "Layla"];

function llamarHeroes(heroe) {
  console.log(`Este es el heroe llamado: ${heroe}`);
}
/*
of = de
heroe de heroes
*/
for (var heroe of heroes) {
  llamarHeroes(heroe);
}
