// https://opensky-network.org/api/states/all?lamin=13.979002559411905&lomin=-114.7385961862692&lamax=32.39122915883972&lomax=-94.4578347389994
// min = 13.979002559411905, -114.7385961862692
// max = 32.39122915883972, -94.4578347389994

// flights of:
// https://opensky-network.org/api/flights/aircraft?icao24=0d07f0&begin=1622448360&end=1623656525

// https://opensky-network.org/api/tracks/all?icao24=0d07f0&time=1623524002

const lamin = '13.9790';
const lomin = '-114.7385';
const lamax = '32.3912';
const lomax = '-94.4578';

const url = `https://opensky-network.org/api/states/all?lamin=${lamin}&lomin=${lomin}&lamax=${lamax}&lomax=${lomax}`;

const columns = [
  'icao24',
  'callsign',
  'origin_country',
  'time_position',
  'last_contact',
  'longitude',
  'latitude',
  'baro_altitude',
  'on_ground',
  'velocity',
  'true_track',
  'vertical_rate',
  'sensors',
  'geo_altitude',
  'squack',
  'spi',
  'position_source',
];

// mapboxgl.accessToken =
// eslint-disable-next-line max-len
//   'pk.eyJ1IjoibW94bGV5LWtydXoiLCJhIjoiY2twb21uYXY0MDB0aDJxcGw0YnZuNWZxbyJ9.oPt_blIqKiCQlt9QkcXZMg';

// const map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/streets-v11',
//   center: [-99.04513062012029, 19.50113241433945],
//   zoom: 4,
// });

async function getInfo() {
  const response = await fetch(url);

  if (response.ok) {
    const json = await response.json();
    return json;
  }

  return undefined;
}

async function run() {
  const flights = await getInfo();
  let flightdata = '';
  let headers = '';
  const map = document.getElementById('map');

  for (let i = 0; i < columns.length; i += 1) {
    headers += `<th scope="col" >${columns[i]}</th>`;
  }

  for (let i = 0; i < flights.states.length; i += 1) {
    flightdata += '<tr>';

    for (let j = 0; j < flights.states[i].length; j += 1) {
      flightdata += `<td>${flights.states[i][j]}</td>`;
    }

    flightdata += '</tr>';
  }

  const table = `<table class='table'>
              <caption> flights</caption>
              <thead><tr> ${headers} </tr></thead>
              <tbody><tr> ${flightdata} </tr></tbody>
          </table>`;

  map.innerHTML += table;

  //   for (let i = 0; i < flights.states.length; i += 1) {
  //     const marker = '';
  //     const el = document.createElement('div');
  //     el.className = 'marker';
  //     el.style.backgroundImage = 'url(./airplane.png)';
  //     el.style.width = '20px';
  //     el.style.height = '20px';
  //     el.style.backgroundSize = '100%';

  //     const market = new mapboxgl.Marker(el)
  //       .setLngLat([flights.states[i][5], flights.states[i][6]])
  //       .setPopup(
  //         new mapboxgl.Popup().setHTML(
  //           `<p>Vuelo ${flights.states[i][1]} desde ${flights.states[i][2]}</p>`,
  //         ),
  //       )
  //       .addTo(mapbox);
  //   }

  //   setTimeout(run, 15000);
}

run();
