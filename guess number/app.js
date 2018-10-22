/*
Game functions:
- Player must guess a number between a min and a max
- Player gets a certain amount of guesses
- Notify player of guesses remainig
- Notify playe of the correct answer if loose
- Let player choose to play again
*/

// Game values - another way to declare vars

let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessLeft = 3;

//UI elements

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput= document.querySelector('#guess-input'),
      message = document.querySelector('.message'),
      playerHelp = document.querySelector('.help-player');

// assign Ui min and max

minNum.textContent = min;
maxNum.textContent = max;

// listen for play again
// for listen on this btn we need to use even delagation and listen on a parent that contain that btn wihit the class we need
// we listen for a mousedown, because click will relaod the page instat whitout let us see the message - we can try to see a conole.log whit click
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

//Listen for guess

guessBtn.addEventListener('click', function(){
  //parse return into a number because is a string
  let guess = parseInt(guessInput.value);
  helpPlayer();
  //validate

  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`please enter a number between ${min} and ${max}`, 'red');
  }

  // check if is winning numevr

  if(guess === winningNum){
    // //disable input
    // guessInput.disabled = true;
    // // change color 
    // guessInput.style.borderColor = 'green';
    // // set message win
    // setMessage(`${winningNum} is correct, YOU WIN!`, 'green');
    gameOver(true,`${winningNum} is correct, YOU WIN!`);
  } else {
    // worng number
    guessLeft -= 1;

    if(guessLeft === 0){

      gameOver(false, `Game over, the correct number was ${winningNum} -  Sorry, YOU LOST`);
      // // game over  - lost
      // guessInput.disabled = true;
      // // change color 
      // guessInput.style.borderColor = 'red';
      // // set message win
      // setMessage(`Game over, the correct number was ${winningNum} -  Sorry, YOU LOST`, 'red');
    } else{
      // game continues  - answer wrong
      setMessage(`Guess is not correct, you have ${guessLeft} remaning.`);
      // change color 
      guessInput.style.borderColor = 'red';
      guessInput.value = '';
    }
  }
})

// optimization code because we have the same message, border and text -- but color are different - we make a function

function gameOver(won, msg){
  let color;
  // if ternary
  won === true ? color = 'green' : color = 'red';
  //disable input
  guessInput.disabled = true;
  // change color 
  guessInput.style.borderColor = color;
  message.style.color = color;
  // set message win
  setMessage(msg);
  // play again
  guessBtn.value = 'Play again'
  guessBtn.className += 'play-again';
}

// function get random winning number

function getRandomNum(min,max){
  // console.log(Math.floor(Math.random()*10)+1);
  return Math.floor(Math.random()*(max-min+1)+1);
}

function helpPlayer(){
  // if(winningNum > guessInput.value){
  //   playerHelp.textContent = 'Mai mult';
  // } else {
  //   playerHelp.textContent = 'Mai putin';
  // }
  playerHelp.textContent = '';
  if (winningNum !== parseInt(guessInput.value)) {
    if(winningNum > guessInput.value){
      playerHelp.textContent = 'Mai mult';
    } else {
      playerHelp.textContent = 'Mai putin';
    }
  }
}

// Set message function
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}