/* global chicago,generateDataset, drawChart */
const container = document.getElementById('container');
let points = [];
const salaries = chicago.data;

const generatePoints = () => {
  salaries.forEach((item) => {
    points.push({
      job: item[9],
      salary: Number(item[11]),
    });
  });

  return points;
};

// eslint-disable-next-line no-unused-vars
const preview = () => {
  const { columns } = chicago.meta.view;
  let headers = '';
  let data = '';

  for (let i = 0; i < columns.length; i += 1) {
    if (typeof columns[i].width !== 'undefined') {
      headers += `<th scope="col" width = ${columns[i].width}>${columns[i].name}</th>`;
    } else {
      headers += `<th scope="col" >${columns[i].name}</th>`;
    }
  }

  for (let i = 0; i < 20; i += 1) {
    data += '<tr>';

    for (let j = 0; j < salaries[i].length; j += 1) {
      data += `<td>${salaries[i][j]}</td>`;
    }

    data += '</tr>';
  }

  const table = `<table>
    <caption> ${chicago.meta.view.name} </caption>
    <thead><tr> ${headers} </tr></thead>
    <tbody><tr> ${data} </tr></tbody>
    </table>`;

  container.innerHTML = table;
};

// window.onload = function run() {
// eslint-disable-next-line no-unused-vars
const graphPoints = () => {
  points = generatePoints();
  const dataset = generateDataset(points);
  drawChart(dataset);
  document.getElementById('graphPoints').disabled = true;
  document.getElementById('orderPoints').disabled = false;
};

function compare(a, b) {
  if (a.salary < b.salary) return -1;
  if (a.salary > b.salary) return 1;
  if (a.salary === b.salary) return 0;

  return null;
}

// eslint-disable-next-line no-unused-vars
const orderPoints = () => {
  points.sort(compare);
  const dataset = generateDataset(points);
  drawChart(dataset);
  document.getElementById('orderPoints').disabled = true;
};

const checkInfo = (c) => {
  const cont = c;
  let html = '<h1>Data is';
  let status = 'LOADED and ready to be manipulated';

  if (typeof chicago === 'undefined' || chicago === null) {
    status = 'NOT LOADED';
  }

  html = `<h1>Data is ${status}</h1>`;
  cont.innerHTML = html;
};

checkInfo(container);
