let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    //not possible to gen. random string but possible to gen. random number.
    //and for array number change into index bcoz of this we store option as a array.
    // if we want number in range of 1to2 so write this: Math.random()*3,for 7 to 9 write this : Math.random()*10
    //to remove number after point do this: Math.floor(Math.random()*3)
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw, Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore; 
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    //Generate computer choice
    const compChoice = genCompChoice();
    
    if(userChoice === compChoice) {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //compChoice = scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //compChoice = rock,scissors
            userWin = compChoice === "scissors"? false : true;
        }
        else{
            //compChoice = rock ,paper
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
