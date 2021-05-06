const makeRowString = function makeRowString(multiplier) {
  let row = '';
  for (let i = 0; i < 10; i += 1) {
    const result = `${multiplier * (i + 1)}`;
    if (result.length === 1) {
      row += `${result}  `;
    } else {
      row += `${result} `;
    }
  }
  return row;
};

function makeTable(numberOfRows) {
  const rows = [];
  const table = document.getElementById('table');
  for (let i = 1; i <= numberOfRows; i += 1) {
    const row = makeRowString(i);
    rows.push(row);
    // eslint-disable-next-line no-console
    console.log(row);
    const pre = document.createElement('pre');
    const br = document.createElement('p');
    pre.innerText = `${row}`;
    table.appendChild(pre);
    table.appendChild(br);
  }
}

// eslint-disable-next-line no-unused-vars
function Run() {
  let rows = document.getElementById('rows').value;
  if (rows === '' || rows < 0) { rows = 10; }
  if (document.getElementById('table') !== null) {
    document.body.removeChild(document.getElementById('table'));
  }
  const div = document.createElement('div');
  div.id = 'table';
  document.body.appendChild(div);
  makeTable(rows);
}
