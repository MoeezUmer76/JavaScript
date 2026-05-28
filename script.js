let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");

let turn = "X";
let gameOver = false;

const turnDisplay = document.getElementById("turnDisplay");
const result = document.getElementById("result");

function makeMove(button) {

    if (button.innerHTML === "" && !gameOver) {

        button.innerHTML = turn;

        if (checkWin()) {

            result.innerHTML = turn + " Wins!";
            gameOver = true;

        } else if (checkDraw()) {

            result.innerHTML = "It's a Draw!";
            gameOver = true;

        } else {

            turn = turn === "X" ? "O" : "X";
            turnDisplay.innerHTML = turn;
        }
    }
}

function checkWin() {

    const winConditions = [

        [b1, b2, b3],
        [b4, b5, b6],
        [b7, b8, b9],

        [b1, b4, b7],
        [b2, b5, b8],
        [b3, b6, b9],

        [b1, b5, b9],
        [b3, b5, b7]
    ];

    return winConditions.some(condition =>
        condition.every(button => button.innerHTML === turn)
    );
}

function checkDraw() {

    return [b1, b2, b3, b4, b5, b6, b7, b8, b9]
        .every(button => button.innerHTML !== "");
}

function resetBoard() {

    [b1, b2, b3, b4, b5, b6, b7, b8, b9]
        .forEach(button => {
            button.innerHTML = "";
        });

    turn = "X";
    gameOver = false;

    turnDisplay.innerHTML = turn;
    result.innerHTML = "Game In Progress";
}

