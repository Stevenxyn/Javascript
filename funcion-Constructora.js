/*
Este es un objeto
*/
var miAuto = {
  marca: "Mercedez benz",
  modelo: "GLE Coupe AMG",
  annio: 2021,
  detalleAuto: function () {
    console.log(`Auto ${this.modelo} del ${this.annio}`);
  },
};

/*
Generamos un template que sera  entiquecido con una instancia creada con los parametros
que estemos ingresando como abajo se muestra en el ejemplo autoNuevo
*/

function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

var autoNuevo = new auto("Porsche", "Cayman", 2020);
autoNuevo;

function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

var autoMadre = new auto("Bocho", "escarabajo", 2022);
autoMadre;
var autoSteven = new auto("Porsche", "Cayenne", 2022);
autoSteven;

/*Ejercicio 1*/

/*Se crea para ir añadiendo objetos*/
function auto(duennio, marca, modelo, annio) {
  (this.duennio = duennio), (this.marca = marca);
  this.modelo = modelo;
  this.annio = annio;
}
/*Creo un array vacio para irlos guardando en cada loop*/
const AUTOS = [];

/*Loop que validara 5 repeticiones y parara*/
for (i = 0; i < 5; i++) {
  let duennio = prompt(`¿Quien es el dueño del auto?: `);
  let marca = prompt(`Marca del auto: `);
  let modelo = prompt(`Modelo del auto: `);
  let annio = prompt(`Año del auto: `);
  /* tomara el array AUTOS y ira metiendo los datos que ingresemos por cada loop que estemos haciendo hasta el limite que le dimos, cada vez que haga un loop es un auto nuevo*/
  AUTOS.push(new auto(duennio, marca, modelo, annio));
}

/*Este for nos llamara las tablas que esten dentro del array, validara si existen y no las mostrara*/
for (i = 0; i < AUTOS.length; i++) {
  console.table(AUTOS[i]);
}
