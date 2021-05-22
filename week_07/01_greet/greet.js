const greeting = (n) => {
  const name = n;
  let greet = '';

  if (name === null || name === undefined) {
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

module.exports = greeting;
