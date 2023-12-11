'use strict';

/*
console.log(document.querySelector('.message').textContent);
// This changes HTML tag content
document.querySelector('.message').textContent = '🎉 Correct Number';

document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 33;

document.querySelector('.guess').value = 17;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// This function is for displaying message
// This function does work, however once I run it after loosing all my score I am still able to write correct number and It turns our right
/* const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}; */

// On every click on button it console logs a number that'll be passed in input
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  // When no number is in input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number!';
    // displayMessage('🚫 No Number!');

    // When number is correct
  } else if (guess === secretNumber) {
    if (score >= 1) {
      document.querySelector('.message').textContent = '🎉 Correct Number!';
      // displayMessage('🎉 Correct Number!');
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = '#3366cc';
      document.querySelector('.number').style.width = '30rem';
    }

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When number is incorrect (No Refactored code :D )
    // But I always have to refactore my code after every project.
    // Refactorung code in this way didn't work.
    /*else if (guess !== secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent =
          guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent =
          '💥 You lost the game!';
        document.querySelector('.score').textContent = 0;
      }
    }
  }*/

    // When number is too high
  } else if (guess > secretNumber) {
    // Two conditions seperated with OR, because code for some reason stops or ignors If condition
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      // displayMessage('📈 Too high!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      // displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
    // When number is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      // displayMessage('📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      // displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...'; // Initial condition of message
  // displayMessage('Start guessing...');

  score = 20; // Restores initial value of score
  document.querySelector('.score').textContent = score; // Initial condition of score

  secretNumber = 0; // Restores initial value of number
  secretNumber = Math.trunc(Math.random() * 20) + 1; // Initial conditions of secretNumber
  document.querySelector('.number').textContent = '?'; // Initial conditions of secretNumber

  document.querySelector('.guess').value = ''; // Initial condition of guess input field

  document.querySelector('body').style.backgroundColor = '#222'; // Original background color
  document.querySelector('.number').style.width = '15rem'; // Original width of number box
});

// If I lost game on wrong number, it means that I have to restart, but... What if player decided that he still checks and finds correct number.
