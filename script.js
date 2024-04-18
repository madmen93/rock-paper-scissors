const userPoints = document.querySelector('#txtUser');
const computerPoints = document.querySelector('#txtComputer');
const userImg = document.querySelector('#user');
const computerImg = document.querySelector('#computer');
const otherText = document.querySelector('#txtOne');
const text = document.querySelector('#txtTwo');
const wrapper = document.querySelector('.wrapper');
const btnPaper = document.querySelector('#btnpaper');
const btnRock = document.querySelector('#btnrock');
const btnScissors = document.querySelector('#btnscissors');

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
        case "btnpaper":
            document.querySelector('#user').src = "./images/paper.png";
            userImg.setAttribute("class", "paper");
            break;
        case "btnrock":
            document.querySelector('#user').src = "./images/rock.png";
            userImg.setAttribute("class", "rock");
            break;
        case "btnscissors":
            document.querySelector('#user').src = "./images/scissors.png";
            userImg.setAttribute("class", "scissors");
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
        document.querySelector('#computer').src = "./images/paper.png";
        computerImg.setAttribute("class","paper");
        break;
    case 2:
        document.querySelector('#computer').src = "./images/rock.png";
        computerImg.setAttribute("class","rock");
        break;
    case 3:
        document.querySelector('#computer').src = "./images/scissors.png";
        computerImg.setAttribute("class","scissors");
        break;
    }
}

//Playround:
let acuUser = 0;
let acuComputer = 0;

function playRound() {
    let messageOne;
    let messageTwo;
    let user = document.querySelector('#user').className;
    let computer = document.querySelector('#computer').className;
    switch (user) {
        case "paper":
        switch (computer) {
            case "paper":
            messageOne = "Whoa!";
            messageTwo = "Tie!";                            
            break;
            case "rock":
            messageOne = "You win!";
            messageTwo = "Paper beats Rock!";
            acuUser++;
            userPoints.textContent =  `Player: ${acuUser}`;
            break;
            case "scissors":
            messageOne = "You lose!";
            messageTwo = "Scissors beats Paper";
            acuComputer++;
            computerPoints.textContent =  `Computer: ${acuComputer}`;
            break;
            }
        break;
        case "rock":
        switch (computer) {
            case "paper":
            messageOne = "You lose!";
            messageTwo = "Paper beats Rock";
            acuComputer++;
            computerPoints.textContent =  `Computer: ${acuComputer}`;
            break;
            case "rock":
            messageOne = "Whoa!";
            messageTwo = "Tie!";
            break;
            case "scissors":
            messageOne = "You win!";
            messageTwo = "Rock beats Scissors!";
            acuUser++;
            userPoints.textContent =  `Player: ${acuUser}`;
            break;
            }
        break;
        case "scissors":
            switch (computer) {
            case "paper":
            messageOne = "You win!";
            messageTwo = "Scissors beats Paper!";
            acuUser++;
            userPoints.textContent =  `Player: ${acuUser}`;
            break;
            case "rock":
            messageOne = "You lose!";
            messageTwo = "Rock beats Scissors";
            acuComputer++;
            computerPoints.textContent =  `Computer: ${acuComputer}`;
            break;
            case "scissors":
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