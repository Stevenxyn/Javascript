let jugador = prompt("ingresa")

let op1 = "piedra";
let op2 = "papel";
let op3 = "tijera";


var juego = function(jugador) {
    if (jugador === (pc = op1)) {
        console.log("Case1 Empate");
    }else if (jugador === (pc = op2)) {
        console.log("case 1 pierdes");
    }else if (jugador === (pc = op3)){
        console.log("case 1 Ganaste");
    }
}

switch (jugador) {
    case "piedra":
        juego(jugador);
        break;
    case "papel":
        juego(jugador);
        break;
    case "tijera":
        juego(jugador);
        break;
    default:
        console.log("Digitaste un dato correcto.");
        break;
}

