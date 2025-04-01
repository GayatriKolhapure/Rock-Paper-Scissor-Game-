let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".images");
const msg = document.querySelector('#msg');

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    //rock, paper, scissor
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    msg.innerText = "Game was draw, Play again!";
    msg.style.backgroundColor = "#053062";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
         msg.innerText = `You lost! Your ${compChoice} beats ${userChoice}`;
         msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user Choice =", userChoice);
    //comp choice
    const compChoice = genCompChoice();
    console.log("Comp choice =",compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper scissor
            userWin = compChoice === 'paper' ? false : true;
        }else if(userChoice === 'paper'){
            userWin = compChoice === 'scissor' ? false : true;
        }else {
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);

    }
}

choices.forEach((images) => {  
    images.addEventListener("click", () => {
        const userChoice = images.getAttribute("id")
        playGame(userChoice);
    });
});





