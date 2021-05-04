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
  circle.style.borderColor = 'rgb(139,0,0)';
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
  circle.style.borderColor = 'rgb(139,0,0)';
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

function thirdCircle(id, left, top) {
  const circle = document.createElement('div');
  circle.id = id;
  circle.style.position = 'absolute';
  circle.style.left = `${left}px`;
  circle.style.top = `${top}px`;
  circle.style.width = '50px';
  circle.style.height = '50px';
  circle.style.border = 'solid';
  circle.style.borderRadius = '100%';
  circle.style.borderWidth = '1px';
  circle.style.borderColor = 'rgb(139,0,0)';
  document.body.appendChild(circle);
}

function third() {
  thirdCircle('3-1', 650, 255);
  thirdCircle('3-2', 674, 230);
  thirdCircle('3-3', 701, 255);
  thirdCircle('3-4', 675, 281);
  thirdCircle('3-5', 657, 273);
  thirdCircle('3-6', 694, 273);
  thirdCircle('3-7', 657, 238);
  thirdCircle('3-8', 694, 238);
}

function bigFourth() {
  const circle = document.createElement('div');
  circle.id = 'Big fourth';
  circle.style.position = 'absolute';
  circle.style.left = '600px';
  circle.style.top = '350px';
  circle.style.width = '100px';
  circle.style.height = '100px';
  circle.style.border = 'solid';
  circle.style.borderRadius = '100%';
  circle.style.borderWidth = '1px';
  circle.style.borderColor = 'rgb(139,0,0)';
  document.body.appendChild(circle);
}
function centerFourth(id, left, top) {
  const circle = document.createElement('div');
  circle.id = id;
  circle.style.position = 'absolute';
  circle.style.left = `${left}px`;
  circle.style.top = `${top}px`;
  circle.style.width = '40px';
  circle.style.height = '40px';
  circle.style.border = 'solid';
  circle.style.borderRadius = '100%';
  circle.style.borderWidth = '1px';
  circle.style.borderColor = 'rgb(139,0,0)';
  document.body.appendChild(circle);
}

function littlefourth(id, left, top) {
  const circle = document.createElement('div');
  circle.id = id;
  circle.style.position = 'absolute';
  circle.style.left = `${left}px`;
  circle.style.top = `${top}px`;
  circle.style.width = '28px';
  circle.style.height = '28px';
  circle.style.border = 'solid';
  circle.style.borderRadius = '100%';
  circle.style.borderWidth = '1px';
  circle.style.borderColor = 'rgb(139,0,0)';
  document.body.appendChild(circle);
}

function fourth() {
  bigFourth();
  centerFourth('center', 630, 380);
  littlefourth('4-01', 601, 380);
  littlefourth('4-02', 607, 365);
  littlefourth('4-03', 618, 356);
  littlefourth('4-04', 632, 351);
  littlefourth('4-05', 647, 352);
  littlefourth('4-06', 660, 360);
  littlefourth('4-07', 671, 380);
  littlefourth('4-08', 669, 372);
  littlefourth('4-09', 671, 387);
  littlefourth('4-10', 668, 401);
  littlefourth('4-11', 658, 414);
  littlefourth('4-12', 646, 420);
  littlefourth('4-13', 629, 421);
  littlefourth('4-14', 617, 416);
  littlefourth('4-15', 606, 405);
  littlefourth('4-16', 601, 391);
  /* TODO: Add more circles */
}

function startExercises() {
  first();
  second();
  third();
  fourth();
}
setTimeout(startExercises, 500);
