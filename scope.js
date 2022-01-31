//Scope global - todo lo que esta en global no puede acceder a local
var nombre = "mercy";


/*Scope Local - solo lo que esta dentro de la funcion, dentro del scope local
puedo acceder a las variables del scope global */

function fun() {
    var apellido = "Lopez";
    return nombre + " " + apellido;
}

console.log(apellido);

//No se puede traer datos de una funcion ya que tiene un scope local, pero puedo llamar datos del scope global al local
 



