function create(id, zIndex, left, top, color) {
  const ball = document.createElement('div');
  ball.id = id;
  ball.style.position = 'absolute';
  ball.style.zIndex = zIndex;
  ball.style.left = `${left}px`;
  ball.style.top = `${top}px`;
  ball.style.width = '100px';
  ball.style.height = '100px';
  ball.style.borderRadius = '100%';
  ball.style.background = `rgb(${color[0]},${color[1]},${color[2]})`;
  document.body.appendChild(ball);
}

function First() {
  create(0, 0, 200, 200, [139, 0, 0]); // darkred
  create(1, 2, 150, 250, [125, 200, 125]); // green
  create(2, 2, 250, 250, [210, 105, 30]); // orange
  create(3, 1, 100, 300, [210, 105, 30]); // orange
  create(4, 3, 150, 350, [100, 200, 255]); // blue
  create(5, 1, 250, 350, [150, 150, 150]); // gray
  create(6, 2, 200, 400, [139, 0, 0]); // darkred
  create(7, 0, 300, 300, [100, 200, 255]); // blue
}

function startExercises() {
  First();
}
setTimeout(startExercises, 1500);
