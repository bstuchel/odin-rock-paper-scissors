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

function game() {
    let gamesWon = 0;
    let gamesLost = 0;
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Please enter your selection:");
        let computerSelection = computerPlay()
        let result = playRound(playerSelection, computerSelection);
        if (result === 0) {
            console.log(`Tie, both players chose ${playerSelection}`);
        } else if (result === -1) {
            console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
            gamesLost++;
        } else {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`)
            gamesWon++;
        }
    }
    console.log(`You won ${gamesWon} game(s) and lost ${gamesLost} game(s)`);
}

game();
