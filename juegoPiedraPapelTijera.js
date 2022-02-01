let player;
function juego(player, pc) {
    if(player === "piedra" && pc === "tijeras"){
        console.log("Jugador gana")
    }else if (player === "tijeras" && pc === "papel"){
        console.log("Jugador gana")
    }else if(player === "papel" && pc === "piedra"){
        console.log("Jugador gana");
    }else if (player === pc){
        console.log("Empate");
    }else{
        console.log("Perdiste");
    }
}



