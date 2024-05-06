document.addEventListener("DOMContentLoaded", function () {
  let startTimer = document.getElementById("starttimer");
  let answer = document.getElementById("answer");
  let submit = document.getElementById("submit");

  let randomNumber;
  let myInterval;


  function submitted() {
    console.log("submitted");
    if (answer.value == randomNumber) {
      alert("Correct");
    } else {
      alert("Try again :(");
    }
    document.getElementById("timer").textContent = "10";
    answer.value = "";
  }

  startTimer.addEventListener("click", () => {
    //first of all the random number will appear
    randomNumber = Math.floor(Math.random() * 10000000000);
    document.getElementById("number").textContent = randomNumber;
    //the timer starts counting
    answer.disabled = true;

    let timer = Number(document.getElementById("timer").textContent);

    clearInterval(myInterval);
    myInterval = setInterval(() => {
      if (timer != -1) {
        document.getElementById("timer").textContent = timer--;
      } else {
        document.getElementById("number").textContent = "";
        answer.disabled = false;
        clearInterval(myInterval);
      }
    }, 1000);
  });
  submit.addEventListener("click", submitted);
  answer.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitted();
    }
  });
});
