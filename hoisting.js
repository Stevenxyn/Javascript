 //Declarativa - la funcion permite invocarse antes y despues de haberse declarado

 function nombreGato(nombre) {
     console.log(`Mi gatico se llama ${nombre}`);
 }

 nombreGato("Spencer");
 /*
 Resultado del codigo es : Mi gatico se llama Spencer
 */

 nombrePerro("El Pepe");

 function nombrePerro(nombre) {
    console.log(`Mi perrito se llama ${nombre}`);
}



/*
 Funcion expresiva
    Si se llama la funcion antes de haberla declarado nos traera error,
    ya que solamente para Funciones expresivas funciona si se llama la función,
    despues de haberla declarado. (Hoisting)
 */



var cancionFavorita = function (cancionFavorita){
    console.log(`Tú canción favorita es: ${cancionFavorita}`);
}

cancionFavorita("Cry - Cigarettes after sex.");



/*
    Declaracion de variables con funciones
        Las variables siempre deben ser declaradas, antes de inicializar una funcion
        sin importar que sea Declarativa ó de Expresión

*/

function bienvenidaUsuario (usuarioNombre,usuarioEdad){
    console.log(`Un gusto ${usuarioNombre} ya tienes ${usuarioEdad} eres adulto`);
}

bienvenidaUsuario("Steven Lopez",22);


/* 
https://developer.mozilla.org/es/docs/Glossary/Hoisting
 */

/* Shift + Alt + A - Añadir o eliminar bloque de comentario.*/