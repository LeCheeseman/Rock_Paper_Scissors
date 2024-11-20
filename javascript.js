const MIN = 1
const MAX = 9

let humanScore = 0
let compScore = 0

function getComputerChoice() {
    
// We use a random number between 1-9 because there are three results
// so we can distribute them evenly 1-3, 4-6, 7-9.

    let compRandomNumber = Math.floor(Math.random() * (MAX - MIN)) + 1;
   
    if (compRandomNumber <= 3) { 
        return "rock";
        console.log("rock");

    } else if (compRandomNumber > 3 && compRandomNumber <= 6) { 
        return "paper";
        console.log("paper");

    } else { 
        return "scissors";
        console.log("scissors");   
    }

}

// function getHumanChoice() {
//     let humanChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
//     return humanChoice;
// }

function playRound(choice) {
    console.log(choice + "into playRound()");
    // Need to alter this to accept argument. 

    // let humanChoice = getHumanChoice();
    let compChoice = getComputerChoice();

    if (choice == "rock" && compChoice == "paper") {
        console.log("You: Rock...");
        console.log("Computer: Paper!");
        console.log("You lose! Paper beats rock.");
        ++compScore
    }
        else if (choice == "rock" && compChoice == "scissors") {
            console.log("You: Rock...");
            console.log("Computer: Scissors!");
            console.log("You win! Rock beats scissors.");
            ++humanScore
        }
         else if (choice == "rock" && compChoice == "rock") {
            console.log("You: Rock...");
            console.log("Computer: Rock!");
            console.log("It's a draw! Rock and rock.");
         }
    if (choice == "paper" && compChoice == "rock") {
            console.log("You: Paper...");
            console.log("Computer: Rock!");
            console.log("You win! Paper beats rock.");
            ++humanScore
        }
        else if (choice == "paper" && compChoice == "scissors") {
                console.log("You: Paper...");
                console.log("Computer: Scissors!");
                console.log("You lose! Scissors beats paper.");
                ++compScore
            }
        else if (choice == "paper" && compChoice == "paper") {
            console.log("You: Paper...");
            console.log("Computer: Paper!");
            console.log("It's a draw! Paper and paper.");
            }
    if (choice == "scissors" && compChoice == "rock") {
            console.log("You: Scissors...");
            console.log("Computer: Rock!");
            console.log("You lose! Rock beats scissors.");
            ++compScore

            }
        else if (choice == "scissors" && compChoice == "paper") {
            console.log("You: Scissors...");
            console.log("Computer: Paper!");
            console.log("You win! Scissors beats paper.");
            ++humanScore

                }
        else if (choice == "scissors" && compChoice == "scissors") {
            console.log("You: Scissors...");
            console.log("Computer: Scissors!");
            console.log("It's a draw! Scissors and scissors.");
            }
    }

// function playGame() {
//     for (let i = 1; i < 6; i++) {
//             console.log("Round: " +i)
//             playRound();
//         }
//             console.log("Game Over!")
//             finalScore();
//         }

 function finalScore() {
    console.log('');
    console.log("After five rounds, the scores are...");
    console.log("Player: " +humanScore);
    console.log("Computer: " +compScore);
    if (humanScore > compScore) console.log("You WIN!");
    if (compScore > humanScore) console.log("You LOSE!");
    if (humanScore === compScore) console.log("It's a draw!");
    resetScore();
 }

 function resetScore() {
    // Resetting global variables, so don't use 'let' 
    humanScore = 0;
    compScore = 0;
 }

const rockButtonPressed = document.querySelector("#rock");

rockButtonPressed.addEventListener("click", (event) => {
    playRound("rock");
    console.log("EV Listener: Rock pressed");
    event.stopPropagation;
});

const scissorButtonPressed = document.querySelector("#scissors");

scissorButtonPressed.addEventListener("click", (event) => {
    playRound("scissors");
    console.log("EV Listener: Scissors pressed");
    event.stopPropagation;
});

const paperButtonPressed = document.querySelector("#paper");

paperButtonPressed.addEventListener("click", (event) => {
    playRound("paper");
    console.log("EV Listener: Paper pressed");
    event.stopPropagation;
});