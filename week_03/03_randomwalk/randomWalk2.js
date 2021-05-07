// This is a random walk.
// use "factory" to make any number of balls
// use update to start random walkers
// Also "mousedown" will create a ball

const size = 30;
const x = [];
const y = [];
const velocity_x = [];
const velocity_y = [];
const balls = [];
const speed = 0;
let xmouse; let
  ymouse;
let totalFactoryOutput = 0;
// To track ball we create a new ball every time it is moved.
// The position of the old ball is used as base for new position
// However this won't quite work if we call factory multiple times
// creating different numbers of balls.
// Can you make it work more generally?
function update() {
  const nballs = balls.length;
  // total length of this array
  // we need to start at totalFactorOutput from the end
  const focus = nballs - totalFactoryOutput;
  for (let i = focus; i < nballs; i++) {
    x[i] += Math.random() * 20 - 10 + speed;
    y[i] += Math.random() * 20 - 10;
    makeBall(x[i], y[i], balls[i].style.backgroundColor);
  }
  // change this if you want to paint faster
  setTimeout(update, 10); // this calls update ever 1/10 second
}
// Can you update this so we can paint with more colors?
function randomColor() {
  const colors = ['red', 'green', 'blue', 'yellow'];
  return colors[Math.floor(Math.random() * 5)];
}
function factory(total) {
  const start = 300;
  for (let i = 0; i < total; i++) {
    makeBall(start, start, randomColor());
  }
  totalFactoryOutput += total;
}
const mouse = function (e) {
  ymouse = e.clientY;
  xmouse = e.clientX;
  makeBall(xmouse, ymouse, randomColor());
  totalFactoryOutput++; // one more made
};
if (window.addEventListener) {
  document.addEventListener('mousedown', mouse, false);
}
