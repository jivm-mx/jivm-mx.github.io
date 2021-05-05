const rows = [];
const makeRowArray = function makeRowArray(multiplier) {
  const row = [];
  for (let i = 0; i < 10; i++) {
    row[i] = multiplier * (i + 1);
  }
  return row;
};

const makeRowString = function makeRowString(multiplier) {
  let row = '';
  for (let i = 0; i < 10; i++) {
    row += `${multiplier * (i + 1)} `;
  }
  return row;
};

const table = function makeTable(numberOfRows) {
  for (let i = 1; i <= numberOfRows; i++) {
    // let row = makeRowArray(i);
    const row = makeRowString(i);
    rows.push(row);
    console.log(row);
  }
};
table(10);
console.log(`Table: ${JSON.stringify(rows)}`);
