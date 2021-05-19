// pos is the PacMan image position variable- it is set to 0 initially
let pos = 0;

// pageWidth is the width of the webpage.
// This is later used to calculate when Pac-Man needs to turn around.

// This array contains all the PacMan movement images
const pacArray = [
  ['./img/PacMan1.png', './img/PacMan2.png'],
  ['./img/PacMan3.png', './img/PacMan4.png'],
];

// this variable defines what direction should PacMan go into:
// 0 = left to right
// 1 = right to left (reverse)
let direction = 0;

// This variable helps determine which PacMan image should be displayed.
// It flips between values 0 and 1
let focus = 0;

function checkPageBounds(imgWidth) {
  const pageWidth = window.innerWidth || document.documentElement.clientWidth
|| document.body.clientWidth;

  const pacmanBorder = pageWidth - imgWidth;

  if (pos >= pacmanBorder) {
    direction = 1;
  }

  if (pos <= 0) {
    direction = 0;
  }

  return direction;
}

// This function is called on mouse click.
// Every time it is called, it updates the PacMan image, position and direction on the screen.
function Run() {
  const img = document.getElementById('PacMan');

  const imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(imgWidth);
  img.src = pacArray[direction][focus];

  if (direction) {
    pos -= 20;
    img.style.left = `${pos}px`;
  } else {
    pos += 20;
    img.style.left = `${pos}px`;
  }
}

setInterval(Run, 200);

// Please do not change
module.exports = checkPageBounds;
