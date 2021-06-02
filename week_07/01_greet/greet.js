/* TO DO: Solve greet.js:36 Uncaught ReferenceError: module is not defined
    at greet.js:38 at browser */
const container = document.getElementById('container');

const greeting = (n) => {
  let name = [];
  name = n;
  let greet = '';

  if (name === null || name === undefined || name === '') {
    greet = 'Hello there!';
  } else {
    if (typeof name === 'string') {
      if (name === n.toUpperCase()) {
        greet = `HELLO ${n}!`;
        return greet;
      }

      if (n.includes(',')) {
        const re = / /g;
        const names = n.replace(re, '').split(',');

        names.forEach((e, index) => {
          if (index < (names.length - 1)) {
            greet += ` ${e},`;
          } else {
            greet += ` ${e}`;
          }
        });
        greet = `Hello,${greet}`;
        return greet;
      }

      greet = `Hello, ${n}`;
    }

    if (typeof name === 'object') {
      n.forEach((e, index) => {
        if (index < (n.length - 1)) {
          greet += ` ${e},`;
        } else {
          greet += ` ${e}`;
        }
      });
      greet = `Hello,${greet}`;
    }
  }

  return greet;
};

// eslint-disable-next-line no-unused-vars
const loadGreet = () => {
  const args = document.getElementById('args').value;
  const html = `<h1>${greeting(args)}</h1>`;
  container.innerHTML = html;
};

module.exports = greeting;
