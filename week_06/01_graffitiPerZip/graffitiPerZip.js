/* global chicago, generateDataset, drawChart */

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
let matching;
let obj;

function graffitiReports(zip) {
  matching = chicago.data.filter((report) => {
    const match = report[16] === zip;
    return match;
  });

  obj = {};
  obj.zip = zip;
  obj.reports = matching.length;
  graffiti.push(obj);
}

zipCodes.forEach(graffitiReports);

// graph graffiti reports data
window.onload = function onLoad() {
  const dataset = generateDataset(graffiti);
  drawChart(dataset);
};
