const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameStart = document.querySelector('.button');

const start = () => {
  const gameState = 'Começar';

  gameStart.addEventListener('click', () => {
    if (gameState === 'Começar') {
      loop();
      console.log('Game Start');
      gameState = 'Recomeçar';
      gameStart.innerHTML.replace(<h1>{gameState}</h1>);
    } else {
      gameState = 'Começar';
      gameStart.innerHTML.replace(<h1>{gameState}</h1>);
    }
  });

  const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
      .getComputedStyle(mario)
      .bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition <= 80) {
      pipe.style.animation = 'none';
      pipe.style.left = `${pipePosition}px`;
      mario.style.animation = 'none';
      mario.style.bottom = `${marioPosition}px`;

      mario.src = './img/game-over.png';
      mario.style.width = '75px';
      mario.style.marginLeft = '50px';

      clearInterval(loop);
    }
  }, 10);
};

const restart = () => {
  loop();
  console.log('Game Restart');
};

const jump = () => {
  mario.classList.add('jump');
  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
};

document.addEventListener('keydown', jump);
