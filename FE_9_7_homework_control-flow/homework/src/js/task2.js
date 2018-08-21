
let guessNumber;
let userNumber;
let attempts = 3;
let startMaxNum = 5;
let maxNum = 5;
let startPrize = 10;
let possiblePrize = 10;
let prize = 10;
let userPrize = 0;

function randomNumber(num) {
    return Math.floor(Math.random() * Math.floor(++num));
}

function newGame() {
    attempts = 3;
    userPrize = 0;
    prize = startPrize;
    possiblePrize = startPrize;
    maxNum = startMaxNum;
    guessGame();
}

function guessGame() {
    guessNumber = randomNumber(maxNum);
    while (userNumber !== guessNumber) {
        if (attempts <= 0) {
            alert(`Thank you for a game. Your prize is: ${userPrize}$`);
            if (confirm('Do you want to play again?')) {
                newGame(); 
            } else {
                alert(`You did not become a millionaire, but can.`);                         
            }
            break;      
        }
        
        userNumber = parseInt(prompt(`Enter a number from 0 to ${maxNum}\nAttempts left: ` 
        + `${attempts}\nTotal prize = ${userPrize}$\nPossible prize on `
        + `current attempt: ${possiblePrize}$`));       
        
        if (userNumber === guessNumber) {
            userPrize += possiblePrize;                        
            let winGame = confirm(`Congratulation!\nYour prize is: ${userPrize}$ Do you want to continue?`);
            if (!winGame) {
                alert(`Thank you for a game. Your prize is: ${userPrize}$`); 
            } else {
                attempts = 3;
                maxNum *= 2;
                prize *= 3;
                possiblePrize = prize;
                guessGame();
            }
            break;            
        }
        attempts--;
        possiblePrize = Math.floor(possiblePrize/2);
    }
}

let game = confirm(`Do you want to play a game?`);

if (!game) {
    alert(`You did not become a millionaire, but can.`);
} else {
    newGame();
}


    
