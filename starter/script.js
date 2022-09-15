'use strict';

// document.querySelector('.number').textContent =23;
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.guess').value = 23;



// let secertNumber = Math.trunc(Math.random() * 20 ) 
// + 1;

// let score = 20;

// let highScore = 0;

// document.querySelector('.check').addEventListener('click',
// function(){

// const guess = document.querySelector('.guess').value;
// console.log(guess);

// // When input empty
// if(!guess){
//     document.querySelector('.message').textContent = 'No Number';
// }

// // When score equal
// else if (guess == secertNumber) {
//  document.querySelector('.message').textContent = 'Correct Number';
//  document.querySelector('.number').textContent = secertNumber;
//  document.querySelector('body').style.backgroundColor = '#60b347';
//  document.querySelector('.number').style.width = '30rem';

//  if ( score > highScore){
//     highScore = score
//     document.querySelector('.highscore').textContent = highScore;
//  }
// }

// // When score high
// else if (guess > secertNumber){

//     if(score > 1){
//         document.querySelector('.message').textContent = 'Too High';
//         score--
//         document.querySelector('.score').textContent = score;
//     }
    
//         else{
//             document.querySelector('.message').textContent = 'You Lost the game';
//         }

// }

// // When score low
// else if (guess < secertNumber){
    
// if(score > 1){
//     document.querySelector('.message').textContent = 'Too Low';
//     score--
//     document.querySelector('.score').textContent = score;
// }

//     else{
//         document.querySelector('.message').textContent = 'You Lost the game';
//     }
 
// }
// }
// )

// document.querySelector('.again').addEventListener('click', 
// function(){
//     score = 20
//     secertNumber = Math.trunc(Math.random() * 20 ) 
//     + 1;
//     document.querySelector('.message').textContent = 'Start guessing...';
//     document.querySelector('.guess').value = '';
//  document.querySelector('.number').textContent = '?';
//  document.querySelector('.score').textContent = score;
//  document.querySelector('body').style.backgroundColor = '#222';
//  document.querySelector('.number').style.width = '15rem';
// }

// )