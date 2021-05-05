let intervalId = '';
let isDuplicating = false;
let exercise = '';

const ball = document.getElementById('ball');
const ballProps = {
  id: 'ball',
  position: 'absolute',
  zIndex: 5,
  left: 0,
  top: document.getElementById('table').offsetHeight,
  width: 50,
  height: 50,
  borderRadius: 50,
  background: [0, 0, 0],
  speedLeft: 50,
  speedTop: 50,
  goForwardLeft: true,
  goForwardTop: true,
};

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function update() {
  const b = ball;
  b.id = `${ballProps.id}`;
  b.style.position = `${ballProps.position}`;
  b.style.zIndex = `${ballProps.zIndex}`;
  b.style.left = `${ballProps.left}px`;
  b.style.top = `${ballProps.top}px`;
  b.style.width = `${ballProps.width}px`;
  b.style.height = `${ballProps.height}px`;
  b.style.borderRadius = `${ballProps.borderRadius}%`;
  b.style.background = `rgb(${ballProps.background[0]},${ballProps.background[1]},${ballProps.background[2]})`;
}

function duplicate() {
  const clone = ball.cloneNode(true);
  clone.id = `ball ${getRandomInt(0, 1001)}`;
  document.body.appendChild(clone);
}

function randomSpeed() {
  const bp = ballProps;
  bp.speedLeft = getRandomInt(0, 101);
  bp.speedTop = getRandomInt(0, 101);
}

function randomColor() {
  const bp = ballProps;
  bp.background[0] = getRandomInt(0, 256);
  bp.background[1] = getRandomInt(0, 256);
  bp.background[2] = getRandomInt(0, 256);
}
function randomRadius() {
  const bp = ballProps;
  bp.borderRadius = getRandomInt(0, 101);
}

function doRandom() {
  const bp = ballProps;
  const toDo = getRandomInt(0, 4);
  switch (toDo) {
    case 0:
      randomRadius(bp);
      break;
    case 1:
      randomSpeed(bp);
      break;
    case 2:
      if (!isDuplicating) {
        intervalId = setInterval(
          () => {
            isDuplicating = true;
            duplicate();
          }, getRandomInt(500, 4000),
        );
      } else {
        clearInterval(intervalId);
        isDuplicating = false;
      }
      break;
    default:
      randomColor(bp);
  }
}

function setStatistics() {
  const bp = ballProps;
  document.getElementById('left').innerHTML = bp.left;
  document.getElementById('top').innerHTML = bp.top;
  document.getElementById('speedLeft').innerHTML = bp.speedLeft;
  document.getElementById('speedTop').innerHTML = bp.speedTop;
  document.getElementById('goForwardLeft').innerHTML = bp.goForwardLeft;
  document.getElementById('goForwardTop').innerHTML = bp.goForwardTop;
  document.getElementById('zIndex').innerHTML = bp.zIndex;
  document.getElementById('borderRadius').innerHTML = bp.borderRadius;
  document.getElementById('isDuplicating').innerHTML = isDuplicating;
}

function checkLimits() {
  const bp = ballProps;
  // https://www.w3schools.com/jsref/prop_win_innerheight.asp
  let widthLimit = window.innerWidth || document.documentElement.clientWidth
  || document.body.clientWidth;

  let heightLimit = window.innerHeight || document.documentElement.clientHeight
  || document.body.clientHeight;

  const tableHeight = document.getElementById('table').offsetHeight;

  widthLimit -= bp.width;
  heightLimit -= bp.height;

  if (bp.left >= widthLimit) {
    bp.left = widthLimit;
    bp.goForwardLeft = false;
    doRandom(bp);
  }
  if (bp.left <= 0) {
    bp.left = 0;
    bp.goForwardLeft = true;
    doRandom(bp);
  }
  if (bp.top >= heightLimit) {
    bp.top = heightLimit;
    bp.goForwardTop = false;
    doRandom(bp);
  }
  if (bp.top <= tableHeight) {
    bp.top = tableHeight;
    bp.goForwardTop = true;
    doRandom(bp);
  }
}

function calcStep() {
  const bp = ballProps;
  const directionLeft = ballProps.goForwardLeft ? 1 : -1;
  const directionTop = ballProps.goForwardTop ? 1 : -1;
  bp.left += bp.speedLeft * directionLeft;
  bp.top += bp.speedTop * directionTop;
}

function startExercise() {
  exercise = setInterval(() => {
    calcStep(ballProps);
    checkLimits(ballProps);
    update(ball, ballProps);
    setStatistics(ballProps);
  }, 200);
}

// eslint-disable-next-line no-unused-vars
function Restart() {
  if (exercise !== '') {
    clearInterval(exercise);
    clearInterval(intervalId);
    isDuplicating = false;
    exercise = '';
  } else {
    setTimeout(() => {
      startExercise();
    }, 500);
  }
}
