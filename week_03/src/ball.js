// this function makes a ball with position and velocity set

// eslint-disable-next-line no-unused-vars
function makeBall(position, shape, color) {
  const ball = document.createElement('div');
  const left = position[0];
  const top = position[1];
  const zIndex = position[2];
  const size = shape[0];
  ball.style.left = left;
  ball.style.top = top;
  ball.style.zIndex = zIndex;
  ball.style.height = size;
  ball.style.width = size;
  ball.style.backgroundColor = `rgb(${color[0]},${color[1]}, ${color[2]})`;
  ball.className = 'ball '; // + id;
  document.body.appendChild(ball);
  return ball;
}
