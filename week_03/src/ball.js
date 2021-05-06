// this function makes a ball with position and velocity set

// eslint-disable-next-line no-unused-vars
function makeBall(xcoord, ycoord, color, size, zIndex, velx = 0, vely = 0, fixed = 0) {
  const ball = document.createElement('div');
  ball.style.backgroundColor = `rgb(${color[0]},${color[1]}, ${color[2]})`;
  ball.style.zIndex = zIndex;
  ball.className = 'ball '; // + id;
  ball.style.height = size;
  ball.style.width = size;
  ball.style.top = ycoord;
  ball.style.left = xcoord;
  document.body.appendChild(ball);
  if (!fixed) {
    // only free balls will be updated
    balls.push(ball);
    x.push(xcoord);
    y.push(ycoord);
    velocity_x.push(velx);
    velocity_y.push(vely);
  }
}

// eslint-disable-next-line no-unused-vars
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// this function makes a ball with position and velocity set

// function makeBall(xcoord, ycoord, color, velx = 0, vely = 0, fixed = 0) {
//   ball = document.createElement("div");
//   ball.style.backgroundColor = color;
//   ball.className = "ball";
//   ball.style.height = ball.style.width = size;
//   ball.style.top = ycoord;
//   ball.style.left = xcoord;
//   document.body.appendChild(ball);
//   if (!fixed) {
//     // only free balls will be updated
//     balls.push(ball);
//     x.push(xcoord);
//     y.push(ycoord);
//     velocity_x.push(velx);
//     velocity_y.push(vely);
//   }
// }
