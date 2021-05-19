const size = 20; // size of ball
const strokeWidth = 5;
const fixed = 0;

const x = []; // position
const y = [];
const stepsize = 10;
const balls = []; // array to hold all free balls
const velocityX = [];
const velocityY = [];

let runInterval = '';
let ball = [];
// eslint-disable-next-line no-restricted-globals
const loc = location;

// function checkWalls(i) {
//   if (x[i] < 0) velocity_x[i] = -velocity_x[i];
//   if (x[i] + size > 800) {
//     velocity_x[i] = -velocity_x[i];
//     x[i] = 800 - size;
//   }
//   if (y[i] + size > 400) {
//     velocity_y[i] = -velocity_y[i];
//     y[i] = 400 - size;
//   } else if (y[i] < 0) {
//     y[i] = 0;
//     velocity_y[i] = -velocity_y[i];
//   }
// }
function checkWalls(i) {
  const rect = document.getElementById('rect');
  const limits = rect.getBoundingClientRect();
  const leftLimit = limits.left;
  const rightLimit = limits.right;
  const topLimit = limits.top;
  const bottomLimit = limits.bottom;
  if (x[i] < (leftLimit + strokeWidth) || x[i] > (rightLimit - (strokeWidth + size))) {
    velocityX[i] = -velocityX[i];
  }
  if (y[i] > (bottomLimit - (strokeWidth + size))) {
    velocityY[i] = -velocityY[i];
    // y[i] = (limits.bottom - size);
  }
  if (y[i] < topLimit) {
    velocityY[i] = -velocityY[i];
    // y[i] = topLimit;
  }
}

// function update() {
//   for (let i = 0; i < balls.length; i++) {
//     x[i] += velocity_x[i];
//     velocity_y[i] += gravity;
//     y[i] += velocity_y[i];
//     checkWalls(i);
//     balls[i].style.left = x[i];
//     balls[i].style.top = y[i];
//     console.log('velocidad', x[i], y[i]);
//   }
//   setTimeout(update, 1000); // this calls update ever 1/10 second
// }

function update() {
  // the wind speed is added to x direction
  if (balls.length >= 1) {
    runInterval = setInterval(() => {
    //   let speed = Number(document.getElementById('speed').value);
    //   if (speed === '' || speed < -21) { speed = 0; }
    //   let gravity = Number(document.getElementById('gravity').value);
    //   if (gravity === '' || gravity < -11) { gravity = 0; }
      for (let i = 0; i < balls.length; i += 1) {
        x[i] += velocityX[i];
        y[i] += velocityY[i];
        balls[i].style.left = x[i];
        balls[i].style.top = y[i];
        // eslint-disable-next-line no-undef
        checkWalls(i);
      }
    }, 100); // this calls update ever 1/10 second
  }
}

function getRandom(scale) {
  return Math.floor(Math.random() * scale - scale / 2);
}
// function factory(total) {
//   // check how make balls exist already and add to the array
//   const n = balls.length;
//   for (let i = 0; i < total; i++) {
//     const velx = getRandom(stepsize);
//     const vely = getRandom(stepsize);
//     makeBall(400 - size / 2, 200 - size / 2, 'blue', velx, vely, 0);
//     makeBall(400 - size / 2, 200 - size / 2, 'red', -velx, -vely, 0);
//   }
// }
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
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

// eslint-disable-next-line no-unused-vars
function create() {
  let velx = getRandom(stepsize);
  let vely = getRandom(stepsize);
  const rect = document.getElementById('rect');
  const limits = rect.getBoundingClientRect();
  const leftLimit = limits.left;
  const rightLimit = limits.right;
  const topLimit = limits.top;
  const bottomLimit = limits.bottom;
  let total = Number(document.getElementById('total').value);
  if (total === '' || total < 0) { total = 1; }
  let i = balls.length;
  const final = (total * 2) + balls.length; // make pairs
  for (i; i < final; i += 1) {
    const color = [getRandomInt(0, 256), getRandomInt(0, 256), getRandomInt(0, 256)];
    const leftStart = (rightLimit - leftLimit - size) / 2;
    const topStart = topLimit + (bottomLimit - topLimit - size) / 2;
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
      if (i % 2 === 0) {
        velocityX.push(-velx);
        velocityY.push(-vely);
      } else {
        velocityX.push(velx);
        velocityY.push(vely);
        velx = getRandom(stepsize);
        vely = getRandom(stepsize);
      }
    }
  }
}
