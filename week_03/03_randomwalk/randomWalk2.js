// This is a random walk.
// use "factory" to make any number of balls
// use update to start random walkers
// Also "mousedown" will create a ball
const size = 30; // size of ball
const strokeWidth = 5;
const x = []; // position
const y = [];
const colors = [];
const balls = [];

let runInterval = '';
let ball = [];
// eslint-disable-next-line no-restricted-globals
const loc = location;

let totalFactoryOutput = 0;
// To track ball we create a new ball every time it is moved.
// The position of the old ball is used as base for new position
// However this won't quite work if we call factory multiple times
// creating different numbers of balls.
// Can you make it work more generally?
function getRandom(step) {
  // return value between +step and -step
  return Math.random() * 2 * step - step;
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
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
    colors.splice(i, 1);
  }
  if (y[i] > (bottomLimit - (strokeWidth + size)) || (y[i] < topLimit)) {
    y.splice(i, 1);
    balls.splice(i, 1);
    colors.splice(i, 1);
  }
}
function update() {
  // the wind speed is added to x direction
  if (balls.length >= 1) {
    runInterval = setInterval(() => {
      let speed = Number(document.getElementById('speed').value);
      if (speed === '' || speed < -21) { speed = 0; }
      let gravity = Number(document.getElementById('gravity').value);
      if (gravity === '' || gravity < -11) { gravity = 0; }
      for (let i = 0; i < balls.length; i += 1) {
        x[i] += Math.random() * 20 - 10 + speed;
        y[i] += Math.random() * 20 - 10 + gravity;
        // eslint-disable-next-line prefer-destructuring
        const zIndex = balls[i].style.zIndex;
        // balls[i].style.left = x[i];
        // balls[i].style.top = y[i];
        // eslint-disable-next-line no-undef
        makeBall([x[i], y[i], zIndex], [size],
          colors[i], totalFactoryOutput);
        checkWalls(i);
      }
    }, 100); // this calls update ever 1/10 second
  }
}

// function update() {
//   const nballs = balls.length;
//   // total length of this array
//   // we need to start at totalFactorOutput from the end
//   const focus = nballs - totalFactoryOutput;
//   for (let i = focus; i < nballs; i++) {
//     x[i] += Math.random() * 20 - 10 + speed;
//     y[i] += Math.random() * 20 - 10;
//     makeBall(x[i], y[i], balls[i].style.backgroundColor);
//   }
//   // change this if you want to paint faster
//   setTimeout(update, 10); // this calls update ever 1/10 second
// }
// Can you update this so we can paint with more colors?
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

const mouse = function mouse(e) {
  const topStart = e.clientY;
  const leftStart = e.clientX;
  const rect = document.getElementById('rect');
  const limits = rect.getBoundingClientRect();
  const leftLimit = limits.left;
  const rightLimit = limits.right;
  const topLimit = limits.top;
  const bottomLimit = limits.bottom;

  // if (leftStart > (leftLimit + strokeWidth) || leftStart < (rightLimit - (strokeWidth + size))
  // || (topStart < (bottomLimit - (strokeWidth + size)) || topStart > topLimit))
  if (leftStart > (leftLimit + strokeWidth)
  && leftStart < (rightLimit - (strokeWidth + (size / 2)))) {
    if (topStart < (bottomLimit - (strokeWidth + (size / 2))) && topStart > topLimit) {
      const zIndex = getRandom(0, 100);
      const color = [getRandomInt(0, 256), getRandomInt(0, 256), getRandomInt(0, 256)];
      // eslint-disable-next-line no-undef
      ball = makeBall([leftStart, topStart, zIndex], [size], color, totalFactoryOutput);
      totalFactoryOutput += 1; // one more made
      balls.push(ball);
      x.push(leftStart);
      y.push(topStart);
      colors.push(color);
    }
  }
};
if (window.addEventListener) {
  if (runInterval === '') {
    document.addEventListener('mousedown', mouse, false);
  }
}
