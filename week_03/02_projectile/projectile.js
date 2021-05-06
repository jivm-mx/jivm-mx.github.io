const size = 30; // size of ball
const x = []; // position
const y = [];
const balls = []; // array to hold all free balls
const stepSize = 5; // step size every update
const velocity_x = [];
const velocity_y = [];
const gravity = 1;

function checkWalls(i) {
  if (x[i] < 0 || x[i] > 800) velocity_x[i] = -velocity_x[i];
  if (y[i] > 400) {
    velocity_y[i] = -velocity_y[i];
    y[i] = 400;
  }
}

function update() {
  for (let i = 0; i < balls.length; i++) {
    x[i] += velocity_x[i];
    velocity_y[i] += gravity;
    y[i] += velocity_y[i];
    checkWalls(i);

    balls[i].style.left = x[i];
    balls[i].style.top = y[i];
  }
  setTimeout(update, 100); // this calls update ever 1/10 second
}

function getRandom(scale) {
  return Math.random() * scale;
}
function create() {
  let total = document.getElementById('total').value;
  if (total === '' || total < 0) { total = 5; }
  for (let i = 0; i < total; i += 1) {
    const velx = Math.floor(getRandom(20) - 10);
    const vely = Math.floor(getRandom(20) - 10);
    const color = [getRandomInt(256), getRandomInt(256), getRandomInt(256)];
    makeBall(getRandom(800), getRandom(400), color, size, velx, vely, 0);
  }
}

function factory(total) {
  // check how make balls exist already and add to the array
  const n = balls.length;
  for (let i = 0; i < total; i++) {
    const velx = Math.floor(getRandom(20) - 10);
    const vely = Math.floor(getRandom(20) - 10);
    const color = [getRandomInt(256), getRandomInt(256), getRandomInt(256)];
    makeBall(getRandom(800), getRandom(400), color, size, velx, vely, 0);
  }
}
