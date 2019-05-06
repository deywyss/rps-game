// variables and objects
const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: "",
    aiHand: "",
}

const hands = [...document.querySelectorAll(".select i")];

// first function (hand selection)

function handSelection() {
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.color = "");

    this.style.color = "royalblue";




}

hands.forEach(hand => hand.addEventListener("click", handSelection));


function computerChoice() {

    const aiHand = hands[Math.floor(Math.random() * 3)].dataset.option;
    return aiHand;
}

function checkResult(player, ai) {
    if (player === ai) {
        // console.log("draw");

        return "draw"

    } else if ((player === "Paper" && ai === "Rock") || (player === "Rock" && ai === "Scissors") || (player === "Scissors" && ai === "Paper")) {
        // console.log("you won");

        return "win"


    } else {
        // console.log("you lost");

        return "loss"
    }
}


// second function ( control function)

function startGame() {
    if (!game.playerHand) return alert("Choose your hand !");

    game.aiHand = computerChoice();

    const gameResult = checkResult(game.playerHand, game.aiHand);

    console.log(gameResult)

    publishResult(game.playerHand, game.aiHand, gameResult);

    endGame()

}


document.querySelector(".start").addEventListener("click", startGame);


// thrid function (result publication)

function publishResult(player, ai, result) {
    document.querySelector("[data-summary='your-choice']").textContent = player;

    document.querySelector("[data-summary='ai-choice']").textContent = ai;


    gameSummary.numbers++;
    document.querySelector("p.numbers span").textContent = gameSummary.numbers;

    if (result === "win") {
        document.querySelector("p.wins span").textContent = ++gameSummary.wins;

        document.querySelector("[data-summary='who-win']").textContent = "You won !"

        document.querySelector("[data-summary='who-win']").style.color = "green";

    } else if (result === "loss") {

        document.querySelector("p.losses span").textContent = ++gameSummary.losses;

        document.querySelector("[data-summary='who-win'").textContent = "You Lost :("
        document.querySelector("[data-summary='who-win'").style.color = "red";

    } else {
        document.querySelector("p.draws span").textContent = ++gameSummary.draws;

        document.querySelector("[data-summary='who-win']").textContent = "DRAW :\\"

        document.querySelector("[data-summary='who-win']").style.color = "royalblue";
    }


}

// fourth function (reset game after played) 

function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.color = "";

    game.playerHand = "";
}