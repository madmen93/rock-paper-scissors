
//Determinar valores iniciales
const paper = "papel";
const rock = "roca";
const sicssors = "tijeras";

//Obtener la jugada del usuario
let move = prompt("Ingrese piedra, papel o tijeras:");
let playerSelection = move.toLowerCase();

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
console.log(getComputerChoice(selection));

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

console.log(playRound(playerSelection,computerSelection));

//Resultado del juego e impresión del resultado del juego