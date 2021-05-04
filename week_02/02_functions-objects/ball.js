// import { create, data } from './magic.js';

function paint() {
  for (let i = 0; i < data.length; i += 1) {
    create(data[i].x, data[i].y, data[i].color);
  }
}

setTimeout(paint, 500);
