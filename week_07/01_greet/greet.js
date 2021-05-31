const container = document.getElementById('container');

const greeting = (n) => {
  const name = n;
  let greet = '';

  if (name === null || name === undefined || name === '') {
    return 'Hello there!';
  }

  if (typeof name === 'string') {
    if (name === n.toUpperCase()) {
      return `HELLO ${n}!`;
    }

    return `Hello, ${n}`;
  }

  n.forEach((e, index) => {
    if (index < (n.length - 1)) {
      greet += ` ${e},`;
    } else {
      greet += ` ${e}`;
    }
  });
  return `Hello,${greet}`;
};

// eslint-disable-next-line no-unused-vars
const loadGreet = () => {
  const args = document.getElementById('args').value;
  const html = `<h1>${greeting(args)}</h1>`;
  container.innerHTML = html;
};

module.exports = greeting;
