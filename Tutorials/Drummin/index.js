
function playSound(key) {
    var audio;
    switch (key) {
      case 'w':
        audio = new Audio('sounds/tom1.mp3');
        break;
      case 'a':
        audio = new Audio('sounds/tom2.mp3');
        break;
      case 's':
        audio = new Audio('sounds/tom3.mp3');
        break;
      case 'd':
        audio = new Audio('sounds/tom4.mp3');
        break;
      case 'j':
        audio = new Audio('sounds/snare.mp3');
        break;
      case 'k':
        audio = new Audio('sounds/crash.mp3');
        break;
      case 'l':
        audio = new Audio('sounds/kick-bass.mp3');
        break;
      default:
        return;
    }
    audio.play();
  }
  
  function handleClick() {
    var key = this.getAttribute('data-key');
    playSound(key);
  
    this.classList.add('pressed');
    setTimeout(() => {
      this.classList.remove('pressed');
    }, 100);
  }
  
  var drumButtons = document.querySelectorAll('.drum');
  drumButtons.forEach(button => {
    button.addEventListener('click', handleClick);
  });
  
  document.addEventListener('keypress', function (event) {
    var key = event.key.toLowerCase();
    if (key === 'w' || key === 'a' || key === 's' || key === 'd' || key === 'j' || key === 'k' || key === 'l') {
      playSound(key);
  
      var button = document.querySelector(`[data-key="${key}"]`);
      button.classList.add('pressed');
      setTimeout(() => {
        button.classList.remove('pressed');
      }, 100);
    }
  });
  