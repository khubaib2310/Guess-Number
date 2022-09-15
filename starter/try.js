'use strict';



let secertNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click',
    function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess)

        // document.querySelector('.number').textContent = secertNumber;

        // When input empty
        if (!guess) {
            document.querySelector('.message').textContent = 'No Number';
        }

        // When score equal
        else if (guess === secertNumber) {
            document.querySelector('.message').textContent = 'Correct Number';
            document.querySelector('.number').textContent = secertNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            if (score > highScore) {

                highScore = score;
                document.querySelector('.highscore').textContent = score;
            }
        }

        // When score high
        else if (guess > secertNumber) {

            if (score > 1) {
                document.querySelector('.message').textContent = 'Too High';
                score--;
                document.querySelector('.score').textContent = score;
            }

            else {
                document.querySelector('.message').textContent = 'You lost the game'
            }

        }


        // When score low
        else if (guess < secertNumber) {

            if (score > 1) {

                document.querySelector('.message').textContent = 'Too low'
                score--;
                document.querySelector('.score').textContent = score;
            }

            else {
                document.querySelector('.message').textContent = 'You lost the game'
            }

        }

    }
)


// Reset Game
document.querySelector('.again').addEventListener('click',
    function () {
        secertNumber = Math.trunc(Math.random() * 20) + 1;
        score = 20;
        document.querySelector('.message').textContent = 'Starting guessing...';
        document.querySelector('.number').textContent = '?';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = '';
    }
);