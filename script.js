'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').textContent = 10;
*/

// defining the secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

// setting score. Starts at 20. Let cz changes with each incorrect guess. Logic in handler function
let score = 20;

// High score variable
let highScore = 0;

// Main handler function
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // wrapped in number function because input element retuns string values. we need to compare the user generated value with another number later on therefore needs to be converted
  console.log(typeof guess, guess);

  // Defining game logic. What happens if there is no guess, a correct guess and an incorrect guess

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number ⛔';

    // When guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347'; // altering css styles
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when guess is wrong - refactoring code. Halves the amount of code needed. Makes it so you dont repeat yourself. Make use of ternary operator
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You Lose';
      document.querySelector('.score').textContent = 0;
    }
  }

  // When guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You Lose';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You Lose';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// ///////////////////////////////////////////////////////////////////////////////////
// CODING CHALLENGE 1

// add eventListener to again button - for a click
// restore initail values of : score & secretNumber
// restore initial conditions of: message , number , score & guess input field
// restore intial background colour and box size

document.querySelector('.again').addEventListener('click', function () {
  // resetting the values for score & number
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // resetting what is being displayed to user
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222'; // altering css styles

  // resetting the input field(making it an empty value) . Value of the input is a string so the empty string is the absence of any value
  document.querySelector('.guess').value = '';
});
// ///////////////////////////////////////////////////////////////////////////////////
