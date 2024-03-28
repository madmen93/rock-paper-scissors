
//Determinar valores iniciales
const paper = "papel";
const rock = "roca";
const sicssors = "tijeras";

//Obtener la jugada del usuario
let move = prompt("Ingrese roca, papel o tijeras:");

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
            sel = "roca";
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

//Resultado del juego e impresión del resultado del juego