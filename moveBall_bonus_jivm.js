/* Set limits */
const limits = {
  width: 600,
  height: 480,
};
/* Initial properties */
const objectProps = {
  id: 0,
  zIndex: 0,
  left: 0,
  top: 50,
  width: 50,
  height: 50,
  borderRadius: 50,
  background: [0, 0, 0],
  speedLeft: 50, // cannot be 0
  speedTop: 50, // cannot be 0
  goForwardLeft: true,
  goForwardTop: true,
};

const leftEnd = limits.width - objectProps.width;
const leftStart = objectProps.left;

const topEnd = limits.height - objectProps.height;
const topStart = objectProps.top;

/* Parameters */
const time = 100; // bounce interval
const duplicateTime = 1000; // duplicate interval
const maxRepetitions = 1000;
let repetitions = 0;
let bounceInterval;
let duplicateInterval;

const object = document.getElementById('object');

function start() {
  console.log('Hay que esperar que inicie la grabación del video');
  bounceInterval = setInterval(bounce, time);
  duplicateInterval = setInterval(duplicate, duplicateTime);
}

function stopIntervals() {
  if (repetitions > maxRepetitions) {
    clearInterval(bounceInterval);
    clearInterval(duplicateInterval);
    console.log('Finished');
  }
}
setTimeout(start, 1500);

function bounce() {
  // debugObjectProps();
  move();
  checkBoundaries();
  bonus();
  updateStatistics();
  stopIntervals();
  repetitions++;
  object.style.left = `${objectProps.left}px`;
  object.style.top = `${objectProps.top}px`;
}

function move() {
  const directionLeft = objectProps.goForwardLeft ? 1 : -1;
  const directionTop = objectProps.goForwardTop ? 1 : -1;

  objectProps.left += objectProps.speedLeft * directionLeft;
  objectProps.top += objectProps.speedTop * directionTop;
}

function checkBoundaries() {
  if (objectProps.left >= leftEnd) {
    objectProps.left = leftEnd;
    objectProps.goForwardLeft = false;
  }
  if (objectProps.left <= leftStart) {
    objectProps.left = leftStart;
    objectProps.goForwardLeft = true;
  }

  if (objectProps.top >= topEnd) {
    objectProps.top = topEnd;
    objectProps.goForwardTop = false;
  }
  if (objectProps.top <= topStart) {
    objectProps.top = topStart;
    objectProps.goForwardTop = true;
  }
}

function bonus() {
  if (objectProps.left === leftEnd) {
    changeColor(0, 256);
  }
  if (objectProps.left === leftStart) {
    changeborderRadius(0, 101);
  }
  if (objectProps.top == topEnd) {
    changeZIndex(1, 21);
  }
  if (objectProps.top === topStart) {
    changeSpeed(50, 200);
  }
}

function changeColor(min, max) {
  objectProps.background[0] = getRandomInt(min, max);
  objectProps.background[1] = getRandomInt(0, 256);
  objectProps.background[2] = getRandomInt(0, 256);

  object.style.background = `rgb(${
    objectProps.background[0]
  },${
    objectProps.background[1]
  },${
    objectProps.background[2]
  })`;
}

function changeborderRadius(minBorder, maxBorder) {
  objectProps.borderRadius = getRandomInt(minBorder, maxBorder);
  object.style.borderRadius = `${objectProps.borderRadius}%`;
}
function changeZIndex(minZ, maxZ) {
  objectProps.zIndex = getRandomInt(minZ, maxZ);
  object.style.zIndex = objectProps.zIndex;
}

function changeSpeed(minVel, maxVel) {
  objectProps.speedLeft = getRandomInt(minVel, maxVel);
  objectProps.speedTop = getRandomInt(minVel, maxVel);
}

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// https://stackoverflow.com/questions/4427094/how-can-i-duplicate-a-div-onclick-event
function duplicate() {
  const clone = object.cloneNode(true); // "deep" clone
  clone.id += ` ${objectProps.id}`;
  object.parentNode.appendChild(clone);
  objectProps.id += 1;
  // clone.id = "bola" + bolaId;
  // or clone.id = ""; if the divs don't need an ID
  // bola.parentNode.appendChild(clone);
}

function updateStatistics() {
  document.getElementById('left').innerHTML = objectProps.left;
  document.getElementById('top').innerHTML = objectProps.top;
  document.getElementById('speedLeft').innerHTML = objectProps.speedLeft;
  document.getElementById('speedTop').innerHTML = objectProps.speedTop;
  document.getElementById('goForwardLeft').innerHTML = objectProps.goForwardLeft;
  document.getElementById('goForwardTop').innerHTML = objectProps.goForwardTop;
  document.getElementById('zIndex').innerHTML = objectProps.zIndex;
  document.getElementById('borderRadius').innerHTML = objectProps.borderRadius;
}

function debugObjectProps() {
  console.log(
    `(x,y): ${
      objectProps.left
    },${
      objectProps.top
    } ,speedLeft: ${
      objectProps.speedLeft
    } , speedTop: ${
      objectProps.speedTop
    }, goForwardLeft: ${
      objectProps.goForwardLeft
    }, goForwardTop: ${
      objectProps.goForwardTop}`,
  );
}
