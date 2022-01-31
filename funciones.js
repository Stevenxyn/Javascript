//Declarativas - la funcion tiene nombre
function miFuncion() {
    return 3;
}

miFuncion()

//Expresion - Funciones anonimas crea variable pero la funcion no tiene nombre

var miFuncion = function (a,b) {
    // console.log(`La suma es ${a + b}`); Template strings
    return a + b;
}
miFuncion(5,5);



