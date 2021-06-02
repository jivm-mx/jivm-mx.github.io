window.onload = () => {
  const tag = document.getElementById('div1');
  tag.innerHTML = 'Hello World';
  let time = 5;
  let stop = false;
  let getTimeInterval = '';

  const getTime = () => {
    time -= 1;
    tag.innerHTML = `Goodbye aliens: ship leaves in ${time} secs`;

    if (time === 0) {
      const b = document.getElementById('body');
      b.style.backgroundColor = 'red';
      tag.innerHTML = 'Ship leaving!';
      stop = true;
    }

    if (stop === true) {
      clearInterval(getTimeInterval);
    }
  };

  getTimeInterval = setInterval(getTime, 1000);
};
