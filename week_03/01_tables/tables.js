const makeRowString = function makeRowString(multiplier) {
  let row = '';
  for (let i = 0; i < 10; i += 1) {
    row += `${multiplier * (i + 1)} `;
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
    const p = document.createElement('p');
    p.innerText = `${row}`;
    table.appendChild(p);
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
