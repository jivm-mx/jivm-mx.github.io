function calcStep(ballProps) {
  const bp = ballProps;
  let limit = window.innerWidth || document.documentElement.clientWidth
  || document.body.clientWidth;
  limit -= bp.width;
  const directionLeft = ballProps.goForwardLeft ? 1 : -1;
  bp.left += bp.speedLeft * directionLeft;
  if (bp.left > limit) {
    bp.left = limit;
    bp.goForwardLeft = false;
  }
  if (bp.left < 0) {
    bp.left = 0;
    bp.goForwardLeft = true;
  }
  return bp.left;
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
    goForwardLeft: true,
    goForwardTop: true,
  };

  setInterval(() => {
    calcStep(ballProps);
    update(ball, ballProps);
  }, 200);
}

setTimeout(startExercise, 500);
