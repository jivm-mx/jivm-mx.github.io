/* global chicago, generateDataset, drawChart */
const container = document.getElementById('container');

const zipCodes = ['60647', '60639', '60707', '60622', '60651',
  '60611', '60638', '60652', '60626', '60615', '60621',
  '60645', '60643', '60660', '60640', '60614', '60631',
  '60646', '60628', '60625', '60641', '60657', '60636',
  '60649', '60617', '60633', '60643', '60612', '60604',
  '60624', '60656', '60644', '60655', '60603', '60605',
  '60653', '60609', '60666', '60618', '60616', '60602',
  '60601', '60608', '60607', '60661', '60606', '60827',
  '60630', '60642', '60659', '60707', '60634', '60613',
  '60610', '60654', '60632', '60623', '60629', '60620',
  '60637', '60619'];

const graffiti = [];
const report = chicago.data;
let matching;
let obj;

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

    for (let j = 0; j < report[i].length; j += 1) {
      data += `<td>${report[i][j]}</td>`;
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

function graffitiReports(zip) {
  matching = chicago.data.filter((greport) => {
    const match = greport[16] === zip;
    return match;
  });

  obj = {};
  obj.zip = zip;
  obj.reports = matching.length;
  graffiti.push(obj);
}

zipCodes.forEach(graffitiReports);

// graph graffiti reports data
// eslint-disable-next-line no-unused-vars
const loadInfo = () => {
  const dataset = generateDataset(graffiti);
  drawChart(dataset);
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
