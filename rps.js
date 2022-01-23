function computerPlay() {
    return ["Rock", "Paper", "Scissors"][Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = makeTitleCase(playerSelection);
    if (playerSelection === computerSelection) {
        return 0;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return 1;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return 1;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return 1;
    }
    return -1;
}

function makeTitleCase(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

let gameScore = [0,0,0];
const selectionButtons = document.querySelectorAll("[data-selection]");
for (var i = 0; i < selectionButtons.length; i++) {
    selectionButtons[i].addEventListener("click", function (e) {
        let playerSelection = e.target.dataset.selection;
        let computerSelection = computerPlay()
        let result = playRound(playerSelection, computerSelection);
        const resultDiv = document.querySelector(".result");
        if (result === 0) {
            resultDiv.innerHTML = `Tie, both players chose ${playerSelection}`;
            gameScore[2]++;
        } else if (result === -1) {
            resultDiv.innerHTML =  `You lose, ${computerSelection} beats ${playerSelection}`;
            gameScore[1]++;
        } else {
            resultDiv.innerHTML = `You win! ${playerSelection} beats ${computerSelection}`;
            gameScore[0]++;
        }
        resultDiv.innerHTML += `<br> The game score is ${gameScore[0]} wins, ${gameScore[1]} losses and ${gameScore[2]} ties.`;
        if (gameScore[0] >= 5 && gameScore[0] > gameScore[1]) {
            resultDiv.innerHTML += `<br> You win!`;
        } else if (gameScore[1] >= 5) {
            resultDiv.innerHTML += `<br> You lose`;
        }
    });
}


