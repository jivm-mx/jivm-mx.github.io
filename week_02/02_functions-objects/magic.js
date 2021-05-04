const createRandom = function createRandom() {
  // random x and y
  const width = window.innerWidth;
  const height = window.innerHeight;
  let x = Math.floor(Math.random() * width);
  let y = Math.floor(Math.random() * height);
  if (x > (width - 50)) x = width - 50;
  if (y > (height - 50)) y = height - 50;

  // random color
  const r = Math.floor(255 * (Math.random()));
  const g = Math.floor(255 * (Math.random()));
  const b = Math.floor(255 * (Math.random()));
  const color = `rgb(${r}, ${g}, ${b})`;

  // set div attributes
  const div = document.createElement('div');
  div.id = 'ball';
  div.style.zIndex = '1';
  div.style.position = 'absolute';
  div.style.left = `${x}px`;
  div.style.top = `${y}px`;
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.borderRadius = '50%';
  div.style.background = color;

  // Then append the whole thing onto the body
  document.getElementsByTagName('body')[0].appendChild(div);

  // default start position
  div.x = x;
  div.y = y;
  return div;
};

const size = function size(div, width, height) {
  const element = div;
  element.style.width = `${width}px`;
  element.style.height = `${height}px`;
};

const color = function color(div, r, g, b) {
  const element = div;
  element.style.background = `rgb(${r}, ${g}, ${b})`;
};

const zIndex = function zIndex(div, newZindex) {
  const element = div;
  element.style.zIndex = `${newZindex.toString()}`;
};

const colorRandom = function colorRandom(div) {
  let counter = 0;
  const limit = 3;
  const element = div;

  const timerColor = function timerColor(e) {
    if (counter >= limit) return;
    counter += 1;

    setTimeout(() => {
      // random color
      const r = Math.floor(255 * (Math.random()));
      const g = Math.floor(255 * (Math.random()));
      const b = Math.floor(255 * (Math.random()));
      e.style.background = `rgb(${r}, ${g}, ${b})`;
      timerColor(e);
    }, 500);
  };
  timerColor(element);
};

const move = function move(div, x, y) {
  const element = div;
  // add x coordinate
  element.x += x;
  element.style.left = `${div.x}px`;

  // add y coordinate
  element.y += y;
  element.style.top = `${div.y}px`;
};

const repeatMove = function repeatMove(div, left, top, limit) {
  const element = div;
  let counter = 0;

  const timerMove = function timerMove(e, x, y) {
    if (counter >= limit) return;
    counter += 1;

    setTimeout(() => {
      move(div, x, y);
      timerMove(div, x, y);
    }, 1000);
  };
  timerMove(element, left, top);
};

// ---------------------------------
function doThings() {
  const execute = false;
  if (execute) {
    const div = createRandom();
    size(div, 100, 100);
    color(div, 255, 255, 255);
    zIndex(div, 0);
    colorRandom(div);
    move(div, 100, 100);
    repeatMove(div, 100, 100, 5);
  }
}

setTimeout(doThings, 500);
