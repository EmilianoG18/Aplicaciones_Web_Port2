document.addEventListener("DOMContentLoaded", function () {
    function getRandomNumber() {
      return Math.floor(Math.random() * 6) + 1;
    }
  
    var img1 = document.querySelector(".img1");
    var img2 = document.querySelector(".img2");
  
    var randomNumber1 = getRandomNumber();
    var randomNumber2 = getRandomNumber();
  
    img1.src = "dice" + randomNumber1 + ".png";
    img2.src = "dice" + randomNumber2 + ".png";
  
    var resultText = "";
    if (randomNumber1 > randomNumber2) {
      resultText = "Player 1 wins!";
    } else if (randomNumber1 < randomNumber2) {
      resultText = "Player 2 wins!";
    } else {
      resultText = "It's a tie!";
    }
  
    document.querySelector("h1").textContent = resultText;
  });
  