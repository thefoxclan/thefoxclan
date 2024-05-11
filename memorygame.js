let timer = 10;
let gamesWon = 0;
let gamesLost = 0;
let interval;

function startGame() {
  resetGame();
}

function startTimer() {
  document.getElementById("randomNumber").style.display = "inline";
  interval = setInterval(function () {
    timer--;
    document.getElementById("timer").innerText = timer;
    if (timer === 0) {
      clearInterval(interval);
      document.getElementById("randomNumber").style.display = "none";
    }
  }, 1000);
}

function checkNumber() {
  let numberInput = parseInt(document.getElementById("numberInput").value);
  if (numberInput === randomNumber) {
    alert("Congratulations! You guessed the correct number.");
    gamesWon++;
  } else {
    alert("Sorry, the correct number was " + randomNumber + ". Try again.");
    gamesLost++;
  }
  document.getElementById("gamesWon").innerText = gamesWon;
  document.getElementById("gamesLost").innerText = gamesLost;
  resetGame();
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 10000000000) + 1;
  timer = 10;
  document.getElementById("randomNumber").innerText = randomNumber;
  document.getElementById("timer").innerText = timer;
  document.getElementById("numberInput").value = "";
  clearInterval(interval);
}

startGame();
document.getElementById("randomNumber").style.display = "none";
