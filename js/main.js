const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');




const recomeco = document.querySelector('.button');



const restart = () => {
  pipe.classList.add('pipe-animation')
  recomeco.innerHTML = '<h1>Recomeçar</h1>'
}

const jump = () => {
  mario.classList.add('jump')
  setTimeout( () => {
    mario.classList.remove('jump');
  }, 500);
};

const loop = setInterval(() => {



  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition <= 80) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './img/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';

    
    clearInterval(loop, () => {
      pipe.classList.remove('pipe-animation');
    });
    

  }

}, 10)

document.addEventListener('keydown', jump);

recomeco.addEventListener('click', restart);