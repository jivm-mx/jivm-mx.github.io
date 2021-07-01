/* global flights */
// https://opensky-network.org/api/states/all?lamin=13.979002559411905&lomin=-114.7385961862692&lamax=32.39122915883972&lomax=-94.4578347389994
// min = 13.979002559411905, -114.7385961862692
// max = 32.39122915883972, -94.4578347389994

// flights of:
// https://opensky-network.org/api/flights/aircraft?icao24=0d07f0&begin=1622448360&end=1623656525

// https://opensky-network.org/api/tracks/all?icao24=0d07f0&time=1623524002

const content = document.getElementById('content');
const TotalFlights = flights.states;

// eslint-disable-next-line no-undef
mapboxgl.accessToken =
  'pk.eyJ1IjoibW94bGV5LWtydXoiLCJhIjoiY2twb21uYXY0MDB0aDJxcGw0YnZuNWZxbyJ9.oPt_blIqKiCQlt9QkcXZMg';

// eslint-disable-next-line no-undef
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-99.04513062012029, 19.50113241433945],
  zoom: 4,
});
// const lamin = '13.9790';
// // const lomin = '-114.7385';
// const lamax = '32.3912';
// // const lomax = '-94.4578';
// const lomin = '-99';
// const lomax = '-50';

// const url = `https://opensky-network.org/api/states/all?lamin=${lamin}&lomin=${lomin}&lamax=${lamax}&lomax=${lomax}`;

// const columns = [
//   'icao24',
//   'callsign',
//   'origin_country',
//   'time_position',
//   'last_contact',
//   'longitude',
//   'latitude',
//   'baro_altitude',
//   'on_ground',
//   'velocity',
//   'true_track',
//   'vertical_rate',
//   'sensors',
//   'geo_altitude',
//   'squack',
//   'spi',
//   'position_source',
// ];

// async function getInfo() {
//   try {
//     // const response = await fetch(url, {
//     //   mode: 'cors',
//     //   headers: {
//     //     'Access-Control-Allow-Origin': '*',
//     //   },
//     // });
//     const response = await fetch('./all.json');

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     } else {
//       const json = await response.json();
//       return json;
//     }
//   } catch (e) {
//     return e;
//   }
// }

const checkInfo = (c) => {
  const cont = c;
  let html = '<h1>Data is LOADED and ready to be manipulated </h1>';
  let status = true;

  if (
    typeof flights === 'undefined' ||
    flights === null ||
    flights instanceof Error
  ) {
    html = '<h1>ERROR GETTING DATA</h1>';
    status = false;
  }

  cont.innerHTML = html;
  return status;
};

// eslint-disable-next-line no-unused-vars
function addFlight() {
  const l = document.getElementById('flightList');
  const selectedFlight = l.options[l.selectedIndex].value;
  console.log(selectedFlight);
  const flight = TotalFlights.filter((item) => item[0] === selectedFlight);
  console.log(flight);
  const el = document.createElement('div');
  el.className = 'marker';
  el.style.backgroundImage = 'url(./images/airplane.png)';
  el.style.width = '20px';
  el.style.height = '20px';
  el.style.backgroundSize = '100%';

  const marker = new mapboxgl.Marker(el)
    .setLngLat([flight[0][5], flight[0][6]])
    .setPopup(
      new mapboxgl.Popup().setHTML(
        `<p>Vuelo ${flight[0][1]} desde ${flight[0][2]}</p>`,
      ),
    )
    .addTo(map);

  document.getElementById(selectedFlight).setAttribute('disabled', 'true');
}

function checkOrigin(flight, country) {
  console.log(flight);
  return flight[2] === country;
}

async function run() {
  // eslint-disable-next-line no-undef

  content.innerHTML += `<h1>Please wait between 30s to 1min</h1>
    <h2> The data is loading</h2>
    `;
  // const flights = await getInfo();

  // onst status = checkInfo(content);
  // console.log(status);

  const filteredFligths = TotalFlights.filter((item) => item[2] === 'Mexico');
  let flightdata = '';

  for (let i = 0; i < filteredFligths.length; i += 1) {
    flightdata += `<option id ="${filteredFligths[i][0]}" value ="${filteredFligths[i][0]}" >Flight from ${filteredFligths[i][2]} with icao24 id ${filteredFligths[i][0]} and callsign ${filteredFligths[i][1]}</option>`;
  }

  const form = `<form>
         <b> Which  flight you want to track?</b>
         <select id="flightList" onchange = "addFlight()" >
         ${flightdata}
         </select>
     <input type = "hidden" id ="flight" size = "70"
         </form>`;

  content.innerHTML += form;

  // for (let i = 0; i < filteredFligths.length; i += 1) {
  //   const el = document.createElement('div');
  //   el.className = 'marker';
  //   el.style.backgroundImage = 'url(./images/airplane.png)';
  //   el.style.width = '20px';
  //   el.style.height = '20px';
  //   el.style.backgroundSize = '100%';

  //   const marker = new mapboxgl.Marker(el)
  //     .setLngLat([filteredFligths[i][5], filteredFligths[i][6]])
  //     .setPopup(
  //       new mapboxgl.Popup().setHTML(
  //         `<p>Vuelo ${filteredFligths[i][1]} desde ${filteredFligths[i][2]}</p>`,
  //       ),
  //     )
  //     .addTo(map);

  //   if (status) {
  //     let flightdata = '';
  //     // const headers = '';

  //     for (let i = 0; i < flights.states.length; i += 1) {
  //       flightdata += `<option value ="${flights.states[i][0]}" >Flight from ${flights.states[i][2]} with icao24 id ${flights.states[i][0]} and callsign ${flights.states[i][1]}</option>`;
  //     }

  //     const form = `<form>
  //     <b> Which  flight you want to track?</b>
  //     <select id="flightList" onchange = "addFlight()" >
  //     ${flightdata}
  //     </select>
  //     <p> Adding:
  // <input type = "text" id ="flight" size = "70" </p>
  //     </form>`;

  //     content.innerHTML += form;

  // eslint-disable-next-line no-undef

  // eslint-disable-next-line no-undef
  // }

  //   for (let i = 0; i < columns.length; i += 1) {
  //     headers += `<th scope="col" >${columns[i]}</th>`;
  //   }

  //   for (let i = 0; i < flights.states.length; i += 1) {
  //     flightdata += '<tr>';

  //     for (let j = 0; j < flights.states[i].length; j += 1) {
  //       flightdata += `<td>${flights.states[i][j]}</td>`;
  //     }

  //     flightdata += '</tr>';
  //   }

  //   const table = `<table class='table'>
  //               <caption> flights</caption>
  //               <thead><tr> ${headers} </tr></thead>
  //               <tbody><tr> ${flightdata} </tr></tbody>
  //           </table>`;

  //   map.innerHTML += table;
  // }

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
