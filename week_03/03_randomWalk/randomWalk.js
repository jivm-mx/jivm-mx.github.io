const size = 30; // size of ball
const strokeWidth = 5;
const fixed = 0;
const x = []; // position
const y = [];
const balls = []; // array to hold all free balls
const stepSize = 5; // step size every update

let runInterval = '';
let ball = [];
// eslint-disable-next-line no-restricted-globals
const loc = location;

function getRandom(step) {
  // return value between +step and -step
  return Math.random() * 2 * step - step;
}

function checkWalls(i) {
  const rect = document.getElementById('rect');
  const limits = rect.getBoundingClientRect();
  const leftLimit = limits.left;
  const rightLimit = limits.right;
  const topLimit = limits.top;
  const bottomLimit = limits.bottom;
  if (x[i] < (leftLimit + strokeWidth) || x[i] > (rightLimit - (strokeWidth + size))) {
    x.splice(i, 1);
    balls.splice(i, 1);
  }
  if (y[i] > (bottomLimit - (strokeWidth + size)) || (y[i] < topLimit)) {
    y.splice(i, 1);
    balls.splice(i, 1);
  }
}

// eslint-disable-next-line no-unused-vars
function update() {
  // the wind speed is added to x direction

  if (balls.length >= 1) {
    runInterval = setInterval(() => {
      let speed = Number(document.getElementById('speed').value);
      if (speed === '' || speed < -21) { speed = 0; }
      let gravity = Number(document.getElementById('gravity').value);
      if (gravity === '' || gravity < -11) { gravity = 0; }
      for (let i = 0; i < balls.length; i += 1) {
        x[i] += getRandom(stepSize) + speed;
        y[i] += getRandom(stepSize) + gravity;
        balls[i].style.left = x[i];
        balls[i].style.top = y[i];
        checkWalls(i);
      }
    }, 100); // this calls update ever 1/10 second
  }
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

// eslint-disable-next-line no-unused-vars
function restart() {
  loc.reload();
}
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// eslint-disable-next-line no-unused-vars
function create() {
  let total = Number(document.getElementById('total').value);
  if (total === '' || total < 0) { total = 5; }
  let i = balls.length;
  const final = total + balls.length;
  const color = [getRandomInt(0, 256), getRandomInt(0, 256), getRandomInt(0, 256)];
  for (i; i < final; i += 1) {
    const leftStart = 100;
    const topStart = 300;
    const zIndex = getRandom(0, 100);
    // eslint-disable-next-line no-undef
    ball = makeBall([leftStart, topStart, zIndex], [size], color, i);
    x[i] = leftStart;
    y[i] = topStart;
    if (!fixed) {
      // only free balls will be updated
      balls.push(ball);
      x.push(leftStart);
      y.push(topStart);
    }
  }
}
