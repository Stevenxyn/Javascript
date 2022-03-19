/* 
Curso JavaScript: 24. Clases y Herencia - #jonmircha

https://www.youtube.com/watch?v=C86JvqET61A&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=25
*/

class carro {
  constructor(modelo, annio) {
    //Atributos
    this.modelo = modelo;
    this.annio = annio;
  }
  //Metodos
  sonidoMotor() {
    console.log(`Sonido alto 3 ${this.modelo}`);
  }
  prende() {
    console.log("El auto prende bien");
  }
}

const AutoLopez = new carro("CLA180", 2022);
AutoMom = new carro("Cayman", 2022);
console.log(AutoLopez);
console.log(AutoMom);
//Llamar objeto con metodo de la clase
AutoLopez.sonidoMotor();
AutoMom.prende();

//crear clase con herencia de otro objeto a moto vamos a heredar carro
class moto extends carro {
  constructor(modelo, annio, color) {
    //super llama el constructor de la clase padre osea carro
    super(modelo, annio);
    this.color = color;
  }
  sonidoMotor() {
    console.log("Sonido de moto alto 2");
  }
  prende() {
    console.log("La moto prende facha");
  }
}
const motoSteven = new moto("KTM", 2022, "Negra");
console.table(motoSteven);
console.log(motoSteven.color);
