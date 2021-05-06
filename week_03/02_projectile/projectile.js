const size = 30; // size of ball
const x = []; // position
const y = [];
const balls = []; // array to hold all free balls
const velocityX = [];
const velocityY = [];
const gravity = 1;
let runInterval = '';

function checkWalls(i) {
  const rect = document.getElementById('rect');
  const limits = rect.getBoundingClientRect();
  if (x[i] < (limits.left + Number(rect.style.strokeWidth))
     || x[i] > (limits.right - (Number(rect.style.strokeWidth) + size))) { velocityX[i] = -velocityX[i]; }
  if (y[i] > (limits.bottom - size)) {
    velocityY[i] = -velocityY[i];
    y[i] = (limits.bottom - size);
  }
}

// eslint-disable-next-line no-unused-vars
function update() {
  runInterval = setInterval(() => {
    for (let i = 0; i < balls.length; i += 1) {
      x[i] += velocityX[i];
      velocityY[i] += gravity;
      y[i] += velocityY[i];
      checkWalls(i);

      balls[i].style.left = x[i];
      balls[i].style.top = y[i];
    }
  }, 100);

  // setTimeout(update, 100); // this calls update ever 1/10 second
}
// eslint-disable-next-line no-unused-vars
function run() {
  if (runInterval !== '') {
    clearInterval(runInterval);
    runInterval = '';
  } else {
    setTimeout(() => {
      update();
    }, 100);
  }
}

function restart() {

}

function getRandom(scale) {
  return Math.random() * scale;
}

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// eslint-disable-next-line no-unused-vars
function create() {
  let total = document.getElementById('total').value;
  if (total === '' || total < 0) { total = 5; }
  const rect = document.getElementById('rect').getBoundingClientRect();
  for (let i = 0; i < total; i += 1) {
    const velX = Math.floor(getRandom(20) - 10);
    const velY = Math.floor(getRandom(20) - 10);
    const color = [getRandomInt(0, 256), getRandomInt(0, 256), getRandomInt(0, 256)];
    const leftStart = getRandomInt(rect.left, (rect.right - size));
    const topStart = getRandomInt(rect.top, (rect.bottom - size));
    const zIndex = getRandom(0, 100);
    const fixed = 0;
    // eslint-disable-next-line no-undef
    const ball = makeBall([leftStart, topStart, zIndex], [size], color);
    if (!fixed) {
      // only free balls will be updated
      balls.push(ball);
      x.push(leftStart);
      y.push(topStart);
      velocityX.push(velX);
      velocityY.push(velY);
    }
  }
}
