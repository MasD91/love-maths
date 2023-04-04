// wait for the DOM to finish loading before running the game
// get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })

    }

    runGame("addition");
})

/**
 * the main game "loop", called when the script is first loaded
 * and after the users answer has been processed
 */
function runGame(gameType) {

    // creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
    displayAdditionQuesiton(num1, num2);
    } else {
        alert(`unkown game type: ${gameType}`);
        throw `Unkown game type: ${gameType}. Aborting!`;
    }
}

/**
 * check the answer against the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer [0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`the answer is not ${userAnswer}. the correct answer is ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);

}
/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, reutrns the correct answer.
 */
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}

/**
 * gets the current score from the DOM and increments it by 1
 */
function incrementScore() {
    
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

/**
 * gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("Incorrect").innerText);
    document.getElementById("Incorrect").innerText = ++oldScore;
    
}

function displayAdditionQuesiton(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}

function displayDivisionQuestion() {
    
}