

let acu = 0;
let acuHuman = 0;
let acuComputer = 0;

//Obtener la jugada del usuario
function getPlayerSelection() {
    let move = prompt("Ingrese piedra, papel o tijeras:");
    return move;
}
let playerMove= getPlayerSelection();
let playerSelection = playerMove.toLowerCase();

//Obtener la jugada de la computadora
function getRandomNumber(){
let number = Math.floor(Math.random()*(4 - 1)+1);
return number;
}

let selection = getRandomNumber();

function getComputerChoice(selection){
    let sel;
    switch (selection) {
        case 1:
            sel = "piedra";
            break;
        case 2:
            sel = "papel";
            break;
        case 3:
            sel = "tijeras";
            break;
    }
    return sel;
}

//Resultado de la ronda e impresión del resultado de la ronda
function playRound(playerSelection, computerSelection) {
    let result;
    switch (playerSelection) {
        case "piedra":
            switch (computerSelection) {
                case "tijeras":
                    result = "¡Ganaste! La piedra vence a las tijeras.";
                    break;
                case "papel":
                    result = "¡Perdiste! El papel vence a la piedra.";
                    break;
                case "piedra":
                    result = "¡Empate!";
                    break;
            }
            break;
        case "papel":
            switch (computerSelection) {
                case "piedra":
                    result = "¡Ganaste! El papel vence a la piedra.";
                    break;
                case "tijeras":
                    result = "¡Perdiste! Las tijeras vencen al papel.";
                    break;
                case "papel":
                    result = "¡Empate!";
            }
            break;
        case "tijeras":
            switch (computerSelection) {
                case "papel":
                    result = "¡Ganaste! Las tijeras vencen al papel.";
                    break;
                case "piedra":
                    result = "¡Perdiste! La piedra vence a las tijeras.";
                    break;
                case "tijeras":
                    result = "¡Empate!";
                    break;
            }
            break;
    }
    return result;
}
let computerSelection = getComputerChoice(selection);

//Resultado del juego e impresión del resultado del juego
let roundResult = playRound(playerSelection, computerSelection);

alert(`La computadora jugó ${computerSelection}. El resultado de la ronda fue: ${roundResult}`);
   
    function playGame(roundResult) {
        let cont = 0;
            if(roundResult == "¡Ganaste! La piedra vence a las tijeras." || roundResult == "¡Ganaste! El papel vence a la piedra." || roundResult == "¡Ganaste! Las tijeras vencen al papel."){
                cont++;
            }else if(roundResult == "¡Perdiste! El papel vence a la piedra." || roundResult == "¡Perdiste! Las tijeras vencen al papel." || roundResult == "¡Perdiste! La piedra vence a las tijeras."){
                cont--;
            }
        return cont;
    }
    gameResult = playGame(roundResult); 

    if(gameResult == 1){
        acuHuman++;
    }else if(gameResult == -1){
        acuComputer++;
    }

    acu += gameResult;

function printResult(acu) {
    let print;
    if(acu > 0){
        print = "¡Ganaste el juego! ¡Felicidades!";
    }else if(acu < 0){
        print = "¡Perdiste el juego! ¡Inténtalo de nuevo!";
    }else{
        print = "¡Empate! A veces ocurre..."
    }
    return print;
}

finalResult = printResult(acu);

alert(`La puntuación final fue:\nJugador: ${acuHuman} Computadora: ${acuComputer}\n${finalResult}`);