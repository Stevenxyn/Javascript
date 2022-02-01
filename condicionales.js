// if = si lo que esta dentro tiene que ser verdad para que se tome esa condicion
// else if = más si
if (true) {
    console.log("Hola");
} else if(){
    console.log("quizas saludare")
}



//Ejercicio1

let edad = 15;

if (edad === 18) {
    console.log(`Tienes ${edad} y es tu primera vez votando`);
} else if (edad <= 17){
    console.log(`Aun eres menor de edad, debes tener 18 no ${edad}`);
}else{
    console.log("Debes ingresar tu edad");
}


//Operador ternario

condition ? true: false;


let n = 1;
let r = n === 1 ? `Si soy un uno`: `No, no soy un uno`;
console.log(r);
//Resultado  = Si soy un uno


let n = 2;
let r = n === 1 ? `Si soy un uno`: `No, no soy un uno`;
console.log(r);
//Resultado  = No, no soy un uno