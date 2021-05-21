/* global boston */
const container = document.getElementById('container');
const person = boston.data;

// eslint-disable-next-line no-unused-vars
const over100k = () => {
  const { columns } = boston.meta.view;
  let headers = '';
  let persondata = '';

  for (let i = 0; i < columns.length; i += 1) {
    if (typeof columns[i].width !== 'undefined') {
      headers += `<th scope="col" width = ${columns[i].width}>${columns[i].name}</th>`;
    } else {
      headers += `<th scope="col" >${columns[i].name}</th>`;
    }
  }

  const topEmployees = person.filter((p) => p[18] >= 150000);
  topEmployees.sort((a, b) => b[18] - a[18]);

  for (let i = 0; i < topEmployees.length; i += 1) {
    persondata += '<tr>';

    for (let j = 0; j < topEmployees[i].length; j += 1) {
      persondata += `<td>${topEmployees[i][j]}</td>`;
    }

    persondata += '</tr>';
  }

  const table = `<table>
    <caption> Top 5 salaries</caption>
    <thead><tr> ${headers} </tr></thead>
    <tbody><tr> ${persondata} </tr></tbody>
</table>`;

  container.innerHTML = table;
};

// eslint-disable-next-line no-unused-vars
const topFive = () => {
  const { columns } = boston.meta.view;
  let headers = '';
  let persondata = '';

  for (let i = 0; i < columns.length; i += 1) {
    if (typeof columns[i].width !== 'undefined') {
      headers += `<th scope="col" width = ${columns[i].width}>${columns[i].name}</th>`;
    } else {
      headers += `<th scope="col" >${columns[i].name}</th>`;
    }
  }

  person.sort((a, b) => b[18] - a[18]);

  for (let i = 0; i < 5; i += 1) {
    persondata += '<tr>';

    for (let j = 0; j < person[i].length; j += 1) {
      persondata += `<td>${person[i][j]}</td>`;
    }

    persondata += '</tr>';
  }

  const table = `<table>
    <caption> Top 5 salaries</caption>
    <thead><tr> ${headers} </tr></thead>
    <tbody><tr> ${persondata} </tr></tbody>
</table>`;

  container.innerHTML = table;
};

// eslint-disable-next-line no-unused-vars
const loadInfo = () => {
  const { columns } = boston.meta.view;
  let headers = '';
  let persondata = '';

  for (let i = 0; i < columns.length; i += 1) {
    if (typeof columns[i].width !== 'undefined') {
      headers += `<th scope="col" width = ${columns[i].width}>${columns[i].name}</th>`;
    } else {
      headers += `<th scope="col" >${columns[i].name}</th>`;
    }
  }

  for (let i = 0; i < 20; i += 1) {
    persondata += '<tr>';

    for (let j = 0; j < person[i].length; j += 1) {
      persondata += `<td>${person[i][j]}</td>`;
    }

    persondata += '</tr>';
  }

  const table = `<table>
  <caption> ${boston.meta.view.name} </caption>
  <thead><tr> ${headers} </tr></thead>
  <tbody><tr> ${persondata} </tr></tbody>
  </table>`;

  container.innerHTML = table;
};

const checkInfo = (c) => {
  const cont = c;
  let html = '<h1>Data is';
  let status = 'LOADED and ready to be manipulated';

  if (typeof boston === 'undefined' || boston === null) {
    status = 'NOT LOADED';
  }

  html = `<h1>Data is ${status}</h1>`;
  cont.innerHTML = html;
};

checkInfo(container);
