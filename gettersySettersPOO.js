/*
          Curso JavaScript: 25. Métodos estáticos, getters y setters - #jonmircha
          https://www.youtube.com/watch?v=TEzu31q9MVA&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=26
          */
//Un metodo estatico se puede ejecutar sin necesidad de intanciar la clase

class persona {
  constructor(nombre, edad) {
    //atributos
    this.nombre = nombre;
    this.edad = edad;
    this.pais = null; // se crea atributo pero no se pone en el constructor
  }
  //metodos
  saludar() {
    console.log(`Hola mi nombre es ${nombre}.`);
  }
  static sobreMi() {
    console.log(`Soy un estudiante y estoy aprendiendo a programar`);
  }
  //Los seters y getters son metodos especiales que nos permiten establecer y obtener valores de atributos de nuestra clase
  get getPais() {
    return this.pais;
  }
  set setPais(pais) {
    this.pais = pais;
  }
}
//metodo estatico se puede llamar sin haber instanciado un objeto saludar no ya que toca instanciar primero
const lopez = new persona("Lopez", 2016);
//console.table(lopez);

console.log(persona.getPais);
//persona.setPais("colombia"); = error

console.log(lopez.getPais); //Llama el atributo pero esta en null
lopez.setPais = "Colombiaa"; // se asigna el atributo
console.log(lopez.getPais); //da el resultado del atributo incluido

console.table(lopez); // aca ya integra el pais que instanciamos con el set
