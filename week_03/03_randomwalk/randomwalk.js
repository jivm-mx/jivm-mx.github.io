const size = 30; // size of ball
const fixed = 0;
const x = []; // position
const y = [];
const velocity_x = [];
const velocity_y = [];
const balls = []; // array to hold all free balls
const speed = 0; // wind speed
const stepSize = 5; // step size every update
let ball = [];

function getRandom(step) {
  // return value between +step and -step
  return Math.random() * 2 * step - step;
}
function update() {
  // the wind speed is added to x direction
  for (let i = 0; i < balls.length; i++) {
    x[i] += getRandom(stepSize) + speed;
    y[i] += getRandom(stepSize);
    balls[i].style.left = x[i];
    balls[i].style.top = y[i];
  }
  setTimeout(update, 100); // this calls update ever 1/10 second
}
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function factory(total) {
  for (let i = 0; i < total; i++) {
    const color = [getRandomInt(0, 256), getRandomInt(0, 256), getRandomInt(0, 256)];
    // eslint-disable-next-line no-undef
    ball = makeBall([100, 300, 0], [size], color, i);
    x[i] = 100;
    y[i] = 300;
    if (!fixed) {
      // only free balls will be updated
      balls.push(ball);
      // x.push(leftStart);
      // y.push(topStart);
      // velocityX.push(velX);
      // velocityY.push(velY);
    }
  }
  if (!fixed) {
    // only free balls will be updated
    balls.push(ball);
    // x.push(leftStart);
    // y.push(topStart);
    // velocityX.push(velX);
    // velocityY.push(velY);
  }
}
// makeBall(100, 300, 'red'); // show how to generate a fixed ball
