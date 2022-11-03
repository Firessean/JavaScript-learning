'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value);
 */

const randomNumber = function () {
    return Math.trunc(Math.random() * 20) + 1;
}
let secretNumber = randomNumber();
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};
const displaySecretNumber = function (number) {
    document.querySelector('.number').textContent = number;
};
const widthOfNumber = function (width) {
    document.querySelector('.number').style.width = width;
};
const bodyBackgroundColor = function (color) {
    document.querySelector('body').style.backgroundColor = color;
};
const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
};


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔ No number!';
        displayMessage('⛔ No number!');

        // When player wins
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        displayMessage('🎉 Correct Number!');
        // document.querySelector('.number').textContent = String(secretNumber);
        displaySecretNumber(secretNumber);

        // document.querySelector('body').style.backgroundColor = '#60b347';
        bodyBackgroundColor('#60b347');
        // document.querySelector('.number').style.width = '30rem';
        widthOfNumber('30rem');

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            // document.querySelector('.score').textContent = String(score);
            displayScore(score);
        } else {
            // document.querySelector('.message').textContent = '💥 You lost the game!';
            displayMessage('💥 You lost the game!');
            // document.querySelector('.score').textContent = String('0');
            displayScore('0');
        }
    }

    //     // When guess is too high
    //  else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too high!';
    //         score--;
    //         document.querySelector('.score').textContent = String(score);
    //     } else  {
    //         document.querySelector('.message').textContent = '💥 You lost the game!'
    //         document.querySelector('.score').textContent = String('0');
    //     }
    //
    //     // When guess is too low
    //  else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = String(score);
    //     } else  {
    //         document.querySelector('.message').textContent = '💥 You lost the game!'
    //         document.querySelector('.score').textContent = String('0');
    //     }
    // }
});

document.querySelector('.again').addEventListener('click', function () {
   score = 20;
   secretNumber = randomNumber();

   document.querySelector('.guess').value = '';
   // document.querySelector('.score').textContent = String(score);
   displayScore(score);
   // document.querySelector('.message').textContent = 'Start guessing...';
   displayMessage('Start guessing...');
   // document.querySelector('.number').textContent = '?';
   displaySecretNumber('?');

   // document.querySelector('body').style.backgroundColor = '#222';
   bodyBackgroundColor('#222');
   // document.querySelector('.number').style.width = '15rem';
   widthOfNumber('15rem');
});
