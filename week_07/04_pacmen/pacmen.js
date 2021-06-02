// const pos = 0;

// const pacArray = [
//   ['./img/PacMan1.png', './img/PacMan2.png'],
//   ['./img/PacMan3.png', './img/PacMan4.png'],
// ];

// const direction = 0;
const pacMen = []; // This array holds all the pacmen

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  const velocity = setToRandom(10); // {x:?, y:?}
  const position = setToRandom(200);

  // Add image to div id = game
  const game = document.getElementById('game');
  const newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = `./img/PacMan${Math.floor((Math.random() * 4) + 1)}.png`;
  newimg.width = 100;

  // TODO: set position here
  newimg.style.left = position;
  newimg.style.top = position;
  // TODO add new Child image to game
  game.appendChild(newimg);

  // return details in an object
  return {
    position,
    velocity,
    newimg,
  };
}

function checkCollisions(p) {
  const current = p;

  if ((p.position.x + p.newimg.width) >= window.innerWidth || p.position.x < 0) {
    current.velocity.x = -p.velocity.x;
  }

  if ((p.position.y + p.newimg.height) >= window.innerHeight || p.position.y < 0) {
    current.velocity.y = -p.velocity.y;
  }
}

function update() {
  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((pacman) => {
    checkCollisions(pacman);
    const p = pacman;
    p.position.x += p.velocity.x;
    p.position.y += p.velocity.y;

    p.newimg.style.left = p.position.x;
    p.newimg.style.top = p.position.y;
  });
  setTimeout(update, 20);
}

// eslint-disable-next-line no-unused-vars
function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}

// don't change this line
if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}
