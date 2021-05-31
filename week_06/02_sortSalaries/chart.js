/* global google */
//  dataset is a two dimensional array
//  the inner format is [x, y]
//  the first position is used for
//  for column names and point labels
// -------------------------------------
const dataset = [['x', 'y']];

//  build dataset
// -------------------------------------
// eslint-disable-next-line no-unused-vars
function generateDataset(points) {
  let index = 1;
  const { length } = points;

  for (let i = 0; i < length; i += 1) {
    const p = points[i];
    // var point = [p.x, p.y];
    const point = [i, p.salary];
    dataset[index] = point;
    index += 1;
  }

  return dataset;
}

//  draw graph
// -------------------------------------
google.load('visualization', '1', { packages: ['corechart'] });

// eslint-disable-next-line no-unused-vars
function drawChart(set) {
  const data = google.visualization.arrayToDataTable(set);

  const options = {
    title: 'City of Chicago Salaries',
    pointSize: 1,
    curveType: 'function',
    vAxis: { gridlines: { count: 20 } },
  };

  const target = document.getElementById('container');
  const chart = new google.visualization.ScatterChart(target);
  chart.draw(data, options);
}
