function calcStep(ballProps) {
  const bp = ballProps;
  // https://www.w3schools.com/jsref/prop_win_innerheight.asp
  let widthLimit = window.innerWidth || document.documentElement.clientWidth
  || document.body.clientWidth;
  widthLimit -= bp.width;
  let heightLimit = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;
  heightLimit -= bp.height;

  const directionLeft = ballProps.goForwardLeft ? 1 : -1;
  const directionTop = ballProps.goForwardTop ? 1 : -1;
  bp.left += bp.speedLeft * directionLeft;
  bp.top += bp.speedTop * directionTop;

  if (bp.left > widthLimit) {
    bp.left = widthLimit;
    bp.goForwardLeft = false;
  }
  if (bp.left < 0) {
    bp.left = 0;
    bp.goForwardLeft = true;
  }
  if (bp.top > heightLimit) {
    bp.top = heightLimit;
    bp.goForwardTop = false;
  }
  if (bp.top < 0) {
    bp.top = 0;
    bp.goForwardTop = true;
  }
}
function update(ball, ballProps) {
  const b = ball;
  b.style.position = `${ballProps.position}`;
  b.style.zIndex = `${ballProps.zIndex}`;
  b.style.left = `${ballProps.left}px`;
  b.style.top = `${ballProps.top}px`;
  b.style.width = `${ballProps.width}px`;
  b.style.height = `${ballProps.height}px`;
  b.style.borderRadius = `${ballProps.borderRadius}%`;
  b.style.background = `${ballProps.background}`;
}

function startExercise() {
  const ball = document.getElementById('ball');
  const ballProps = {
    position: 'absolute',
    zIndex: 5,
    left: 0,
    top: 0,
    width: 50,
    height: 50,
    borderRadius: 50,
    background: 'green',
    speedLeft: 50,
    speedTop: 50,
    goForwardLeft: true,
    goForwardTop: true,
  };

  setInterval(() => {
    calcStep(ballProps);
    update(ball, ballProps);
  }, 200);
}

setTimeout(startExercise, 500);
