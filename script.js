
//Determinar valores iniciales
const paper = "papel";
const rock = "roca";
const sicssors = "tijeras";

//Obtener la jugada del usuario
let playerSelection = prompt("Ingrese roca, papel o tijeras:");

//Obtener la jugada de la computadora
function getRandomNumber(){
let number = Math.floor(Math.random()*(3 - 1)+1);
return number;
}


console.log(getRandomNumber());
//Resultado de la ronda e impresión del resultado de la ronda

//Resultado del juego e impresión del resultado del juego