function createCircle(id, zIndex, left, top, color) {
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

function first() {
  createCircle('0', 0, 200, 200, [139, 0, 0]); // darkred

  createCircle('1a', 2, 150, 250, [125, 200, 125]); // green
  createCircle('1b', 2, 250, 250, [210, 105, 30]); // orange

  createCircle('2a', 1, 100, 300, [210, 105, 30]); // orange
  createCircle('2b', 0, 300, 300, [100, 200, 255]); // blue

  createCircle('3a', 3, 150, 350, [100, 200, 255]); // blue
  createCircle('3b', 1, 250, 350, [150, 150, 150]); // gray

  createCircle('4', 2, 200, 400, [139, 0, 0]); // darkred
}
function MainCircle(id) {
  const circle = document.createElement('div');
  circle.id = id;
  circle.style.position = 'absolute';
  circle.style.left = '500px';
  circle.style.top = '250px';
  circle.style.width = '100px';
  circle.style.height = '100px';
  circle.style.border = 'solid';
  circle.style.borderRadius = '100%';
  circle.style.borderWidth = '1px';
  circle.style.borderColor = 'rgb(0,0,0)';
  document.body.appendChild(circle);
}

function borderCircle(id, left, top) {
  const circle = document.createElement('div');
  circle.id = id;
  circle.style.position = 'absolute';
  circle.style.left = `${left}px`;
  circle.style.top = `${top}px`;
  circle.style.width = '20px';
  circle.style.height = '20px';
  circle.style.border = 'solid';
  circle.style.borderRadius = '100%';
  circle.style.borderWidth = '1px';
  circle.style.borderColor = 'rgb(0,0,0)';
  document.body.appendChild(circle);
}

function second() {
  MainCircle('MainCircle');
  borderCircle('border 01', 500, 244);
  borderCircle('border 02', 486, 260);
  borderCircle('border 03', 479, 280);
  borderCircle('border 04', 480, 302);
  borderCircle('border 05', 488, 322);
  borderCircle('border 06', 503, 338);
  borderCircle('border 07', 522, 349);
  borderCircle('border 08', 543, 351);
  borderCircle('border 09', 564, 347);
  borderCircle('border 10', 582, 335);
  borderCircle('border 11', 595, 318);
  borderCircle('border 12', 601, 298);
  borderCircle('border 13', 600, 276);
  borderCircle('border 14', 591, 256);
  borderCircle('border 15', 576, 240);
  borderCircle('border 16', 557, 231);
  borderCircle('border 17', 537, 229);
  borderCircle('border 18', 517, 233);
}

function startExercises() {
  first();
  second();
}
setTimeout(startExercises, 500);
