function createCircle(position, shape, color) {
  const circle = document.createElement('div');
  circle.id = `${position[0]}`;
  circle.style.zIndex = `${position[1]}`;
  circle.style.left = `${position[2]}px`;
  circle.style.top = `${position[3]}px`;
  circle.style.position = `${position[4]}`;
  circle.style.width = `${shape[0]}px`;
  circle.style.height = `${shape[1]}px`;
  circle.style.borderRadius = `${shape[2]}%`;
  circle.style.border = `${shape[3]}`;
  circle.style.borderWidth = `${shape[4]}px`;
  if (color[0] !== null) {
    circle.style.background = `rgb(${color[0][0]},${color[0][1]},${color[0][2]})`;
  }
  circle.style.borderColor = `rgb(${color[1][0]},${color[1][1]},${color[1][2]})`;
  document.body.appendChild(circle);
}

function first() {
  createCircle(['0', 0, 200, 200, 'absolute'], [100, 100, 100], [[139, 0, 0], [0, 0, 0]]);

  createCircle(['1a', 2, 150, 250, 'absolute'], [100, 100, 100], [[125, 200, 125], [0, 0, 0]]);
  createCircle(['1b', 2, 250, 250, 'absolute'], [100, 100, 100], [[210, 105, 30], [0, 0, 0]]);

  createCircle(['2a', 1, 100, 300, 'absolute'], [100, 100, 100], [[210, 105, 30], [0, 0, 0]]);
  createCircle(['2b', 0, 300, 300, 'absolute'], [100, 100, 100], [[100, 200, 255], [0, 0, 0]]);

  createCircle(['3a', 3, 150, 350, 'absolute'], [100, 100, 100], [[100, 200, 255], [0, 0, 0]]);
  createCircle(['3b', 1, 250, 350, 'absolute'], [100, 100, 100], [[150, 150, 150], [0, 0, 0]]);

  createCircle(['4', 2, 200, 400, 'absolute'], [100, 100, 100], [[139, 0, 0], [0, 0, 0]]);
}

function second() {
  createCircle(['MainCircle', 0, 500, 250, 'absolute'], [100, 100, 100, 'solid', 1], [[255, 255, 255], [139, 0, 0]]);
  createCircle(['border 01', 0, 500, 244, 'absolute'], [20, 20, 100, 'solid', 1], [[255, 255, 255], [139, 0, 0]]);
  createCircle(['border 02', 0, 486, 260, 'absolute'], [20, 20, 100, 'solid', 1], [[255, 255, 255], [139, 0, 0]]);
  createCircle(['border 03', 0, 479, 280, 'absolute'], [20, 20, 100, 'solid', 1], [[255, 255, 255], [139, 0, 0]]);
  createCircle(['border 04', 0, 480, 302, 'absolute'], [20, 20, 100, 'solid', 1], [[255, 255, 255], [139, 0, 0]]);
  createCircle(['border 05', 0, 488, 322, 'absolute'], [20, 20, 100, 'solid', 1], [[255, 255, 255], [139, 0, 0]]);
  createCircle(['border 06', 0, 503, 338, 'absolute'], [20, 20, 100, 'solid', 1], [[255, 255, 255], [139, 0, 0]]);
  createCircle(['border 07', 0, 522, 349, 'absolute'], [20, 20, 100, 'solid', 1], [[255, 255, 255], [139, 0, 0]]);
  createCircle(['border 08', 0, 543, 351, 'absolute'], [20, 20, 100, 'solid', 1], [[255, 255, 255], [139, 0, 0]]);
  createCircle(['border 09', 0, 564, 347, 'absolute'], [20, 20, 100, 'solid', 1], [[255, 255, 255], [139, 0, 0]]);
  createCircle(['border 10', 0, 582, 335, 'absolute'], [20, 20, 100, 'solid', 1], [[255, 255, 255], [139, 0, 0]]);
  createCircle(['border 11', 0, 595, 318, 'absolute'], [20, 20, 100, 'solid', 1], [[255, 255, 255], [139, 0, 0]]);
  createCircle(['border 12', 0, 601, 298, 'absolute'], [20, 20, 100, 'solid', 1], [[255, 255, 255], [139, 0, 0]]);
  createCircle(['border 13', 0, 600, 276, 'absolute'], [20, 20, 100, 'solid', 1], [[255, 255, 255], [139, 0, 0]]);
  createCircle(['border 14', 0, 591, 256, 'absolute'], [20, 20, 100, 'solid', 1], [[255, 255, 255], [139, 0, 0]]);
  createCircle(['border 15', 0, 576, 240, 'absolute'], [20, 20, 100, 'solid', 1], [[255, 255, 255], [139, 0, 0]]);
  createCircle(['border 16', 0, 557, 231, 'absolute'], [20, 20, 100, 'solid', 1], [[255, 255, 255], [139, 0, 0]]);
  createCircle(['border 17', 0, 537, 229, 'absolute'], [20, 20, 100, 'solid', 1], [[255, 255, 255], [139, 0, 0]]);
  createCircle(['border 17', 0, 517, 233, 'absolute'], [20, 20, 100, 'solid', 1], [[255, 255, 255], [139, 0, 0]]);
}

function third() {
  createCircle(['3-1', null, 650, 255, 'absolute'], [50, 50, 100, 'solid', 1], [null, [139, 0, 0]]);
  createCircle(['3-2', null, 674, 230, 'absolute'], [50, 50, 100, 'solid', 1], [null, [139, 0, 0]]);
  createCircle(['3-3', null, 701, 255, 'absolute'], [50, 50, 100, 'solid', 1], [null, [139, 0, 0]]);
  createCircle(['3-4', null, 675, 281, 'absolute'], [50, 50, 100, 'solid', 1], [null, [139, 0, 0]]);
  createCircle(['3-5', null, 657, 273, 'absolute'], [50, 50, 100, 'solid', 1], [null, [139, 0, 0]]);
  createCircle(['3-6', null, 694, 273, 'absolute'], [50, 50, 100, 'solid', 1], [null, [139, 0, 0]]);
  createCircle(['3-7', null, 657, 238, 'absolute'], [50, 50, 100, 'solid', 1], [null, [139, 0, 0]]);
  createCircle(['3-8', null, 694, 238, 'absolute'], [50, 50, 100, 'solid', 1], [null, [139, 0, 0]]);
}

function fourth() {
  createCircle(['Big fourth', null, 600, 350, 'absolute'], [100, 100, 100, 'solid', 1], [null, [139, 0, 0]]);
  createCircle(['Center fourth', null, 630, 380, 'absolute'], [40, 40, 100, 'solid', 1], [null, [139, 0, 0]]);
  createCircle(['4-01', null, 601, 380, 'absolute'], [28, 28, 100, 'solid', 1], [null, [139, 0, 0]]);
  createCircle(['4-02', null, 607, 365, 'absolute'], [28, 28, 100, 'solid', 1], [null, [139, 0, 0]]);
  createCircle(['4-03', null, 618, 356, 'absolute'], [28, 28, 100, 'solid', 1], [null, [139, 0, 0]]);
  createCircle(['4-04', null, 632, 351, 'absolute'], [28, 28, 100, 'solid', 1], [null, [139, 0, 0]]);
  createCircle(['4-05', null, 647, 352, 'absolute'], [28, 28, 100, 'solid', 1], [null, [139, 0, 0]]);
  createCircle(['4-06', null, 660, 360, 'absolute'], [28, 28, 100, 'solid', 1], [null, [139, 0, 0]]);
  createCircle(['4-07', null, 669, 372, 'absolute'], [28, 28, 100, 'solid', 1], [null, [139, 0, 0]]);
  createCircle(['4-08', null, 671, 387, 'absolute'], [28, 28, 100, 'solid', 1], [null, [139, 0, 0]]);
  createCircle(['4-09', null, 668, 401, 'absolute'], [28, 28, 100, 'solid', 1], [null, [139, 0, 0]]);
  createCircle(['4-10', null, 658, 414, 'absolute'], [28, 28, 100, 'solid', 1], [null, [139, 0, 0]]);
  createCircle(['4-11', null, 646, 420, 'absolute'], [28, 28, 100, 'solid', 1], [null, [139, 0, 0]]);
  createCircle(['4-12', null, 629, 421, 'absolute'], [28, 28, 100, 'solid', 1], [null, [139, 0, 0]]);
  createCircle(['4-13', null, 617, 416, 'absolute'], [28, 28, 100, 'solid', 1], [null, [139, 0, 0]]);
  createCircle(['4-14', null, 606, 405, 'absolute'], [28, 28, 100, 'solid', 1], [null, [139, 0, 0]]);
  createCircle(['4-15', null, 601, 391, 'absolute'], [28, 28, 100, 'solid', 1], [null, [139, 0, 0]]);
}

function startExercises() {
  first();
  second();
  third();
  fourth();
}
setTimeout(startExercises, 500);
