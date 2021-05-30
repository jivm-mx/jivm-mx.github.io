/* global google */
//  dataset is a two dimensional array
//  the inner format is [zipCode, numberOfReports, style]
//  the first position is used for
//  for column names and point labels
// -------------------------------------
const dataset = [['zip', 'reports', { role: 'annotation' }]];

//  build dataset
// -------------------------------------
// eslint-disable-next-line no-unused-vars
function generateDataset(points) {
  let index = 1;
  const { length } = points;

  for (let i = 0; i < length; i += 1) {
    const p = points[i];
    const point = [p.zip, p.reports, p.reports];
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
    title: 'What zip code has the most graffiti reports?',
    subtitle: 'exploration graffiti reports',
    chartArea: { width: '75%', height: '95%' },
  };

  const target = document.getElementById('chart_div');
  const chart = new google.visualization.BarChart(target);
  chart.draw(data, options);
}
