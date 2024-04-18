const userPoints = document.querySelector('#txtUser');
const computerPoints = document.querySelector('#txtComputer');
const otherText = document.querySelector('#txtOne');
const text = document.querySelector('#txtTwo');
const wrapper = document.querySelector('.wrapper');
const btnPaper = document.querySelector('#paper');
const btnRock = document.querySelector('#rock');
const btnScissors = document.querySelector('#scissors');

//Final message:
const newMessage = document.createElement('section');
newMessage.setAttribute("class", "hide");
const textMessage = document.createElement('p');
textMessage.setAttribute("class", "txtMessage");
textMessage.textContent = "You win!";
const refreshBtn = document.createElement('button');
refreshBtn.setAttribute("class", "newBtn");
refreshBtn.textContent = "Refresh";
document.body.appendChild(newMessage);
newMessage.appendChild(textMessage);
newMessage.appendChild(refreshBtn);

//Get player selection:
function playerSelection() {
    let sel = this.id;
    switch (sel) {
        case "paper":
            document.querySelector('.user').src = "./images/paper.png";
            break;
        case "rock":
            document.querySelector('.user').src = "./images/rock.png";
            break;
        case "scissors":
            document.querySelector('.user').src = "./images/scissors.png";
            break;
    } 
    computerSelection();
    playRound();
}
            
//Get computer selection:
function computerSelection(){
    let number = Math.floor(Math.random()*(4 - 1)+1);
    switch (number) {
    case 1:
        document.querySelector('.computer').src = "./images/paper.png";
        break;
    case 2:
        document.querySelector('.computer').src = "./images/rock.png";
        break;
    case 3:
        document.querySelector('.computer').src = "./images/scissors.png";
        break;
    }
}

//Playround:
let acuUser = 0;
let acuComputer = 0;

function playRound() {
    let messageOne;
    let messageTwo;
    let user = document.querySelector('.user').src;
    let computer = document.querySelector('.computer').src;
    switch (user) {
        case "http://127.0.0.1:5500/images/paper.png":
        switch (computer) {
            case "http://127.0.0.1:5500/images/paper.png":
            messageOne = "Whoa!";
            messageTwo = "Tie!";                            
            break;
            case "http://127.0.0.1:5500/images/rock.png":
            messageOne = "You win!";
            messageTwo = "Paper beats Rock!";
            acuUser++;
            userPoints.textContent =  `Player: ${acuUser}`;
            break;
            case "http://127.0.0.1:5500/images/scissors.png":
            messageOne = "You lose!";
            messageTwo = "Scissors beats Paper";
            acuComputer++;
            computerPoints.textContent =  `Computer: ${acuComputer}`;
            break;
            }
        break;
        case "http://127.0.0.1:5500/images/rock.png":
        switch (computer) {
            case "http://127.0.0.1:5500/images/paper.png":
            messageOne = "You lose!";
            messageTwo = "Paper beats Rock";
            acuComputer++;
            computerPoints.textContent =  `Computer: ${acuComputer}`;
            break;
            case "http://127.0.0.1:5500/images/rock.png":
            messageOne = "Whoa!";
            messageTwo = "Tie!";
            break;
            case "http://127.0.0.1:5500/images/scissors.png":
            messageOne = "You win!";
            messageTwo = "Rock beats Scissors!";
            acuUser++;
            userPoints.textContent =  `Player: ${acuUser}`;
            break;
            }
        break;
        case "http://127.0.0.1:5500/images/scissors.png":
            switch (computer) {
            case "http://127.0.0.1:5500/images/paper.png":
            messageOne = "You win!";
            messageTwo = "Scissors beats Paper!";
            acuUser++;
            userPoints.textContent =  `Player: ${acuUser}`;
            break;
            case "http://127.0.0.1:5500/images/rock.png":
            messageOne = "You lose!";
            messageTwo = "Rock beats Scissors";
            acuComputer++;
            computerPoints.textContent =  `Computer: ${acuComputer}`;
            break;
            case "http://127.0.0.1:5500/images/scissors.png":
            messageOne = "Whoa!";
            messageTwo = "Tie";
            break;
            }
        break;
        }
    otherText.textContent = messageOne;
    text.textContent = messageTwo;
    declareWinner();
    }
                                                
//Declare who reaches 5 points:
function declareWinner(){
    if(acuUser == 5 || acuComputer ==5){
        removeWrapper();
        if(acuUser === 5){
            newMessage.setAttribute("class", "message");
        }else{
            textMessage.textContent = "You lose!";
            newMessage.setAttribute("class", "message");
        }
    }
}

function removeWrapper() {
    wrapper.remove();
}

function refreshPage() {
    location.reload();
}

btnPaper.addEventListener("click", playerSelection);
btnRock.addEventListener("click", playerSelection);
btnScissors.addEventListener("click", playerSelection);
refreshBtn.addEventListener("click", refreshPage);