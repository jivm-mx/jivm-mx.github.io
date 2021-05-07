const size = 30; // size of ball
const fixed = 0;
const x = []; // position
const y = [];
const velocityX = [];
const velocityY = [];
const balls = []; // array to hold all free balls
const speed = 0; // wind speed
const stepSize = 5; // step size every update
let runInterval = '';
let ball = [];
// eslint-disable-next-line no-restricted-globals
const loc = location;

function getRandom(step) {
  // return value between +step and -step
  return Math.random() * 2 * step - step;
}

// eslint-disable-next-line no-unused-vars
function update() {
  // the wind speed is added to x direction
  runInterval = setInterval(() => {
    for (let i = 0; i < balls.length; i++) {
      x[i] += getRandom(stepSize) + speed;
      y[i] += getRandom(stepSize);
      balls[i].style.left = x[i];
      balls[i].style.top = y[i];
    }
  }, 100); // this calls update ever 1/10 second
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

// function factory(total) {
//   for (let i = 0; i < total; i += 1) {
//     const leftStart = 100;
//     const topStart = 300;
//     const zIndex = getRandom(0, 100);
//     const color = [getRandomInt(0, 256), getRandomInt(0, 256), getRandomInt(0, 256)];
//     // eslint-disable-next-line no-undef
//     ball = makeBall([leftStart, topStart, zIndex], [size], color, i);
//     x[i] = leftStart;
//     y[i] = topStart;
//     if (!fixed) {
//       // only free balls will be updated
//       balls.push(ball);
//       x.push(leftStart);
//       y.push(topStart);
//     }
//   }
// }
// eslint-disable-next-line no-unused-vars
function create() {
  let total = document.getElementById('total').value;
  if (total === '' || total < 0) { total = 5; }
  for (let i = 0; i < total; i += 1) {
    const leftStart = 100;
    const topStart = 300;
    const zIndex = getRandom(0, 100);
    const color = [getRandomInt(0, 256), getRandomInt(0, 256), getRandomInt(0, 256)];
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
