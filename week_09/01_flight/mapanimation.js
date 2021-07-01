// https://opensky-network.org/api/states/all?lamin=13.979002559411905&lomin=-114.7385961862692&lamax=32.39122915883972&lomax=-94.4578347389994
// min = 13.979002559411905, -114.7385961862692
// max = 32.39122915883972, -94.4578347389994

// flights of:
// https://opensky-network.org/api/flights/aircraft?icao24=0d07f0&begin=1622448360&end=1623656525

// https://opensky-network.org/api/tracks/all?icao24=0d07f0&time=1623524002

const content = document.getElementById('content');
let mexicanFlights = [];
const myFlights = [];
let map = '{}';
const lamin = '13.9790';
const lomin = '-114.7385';
const lamax = '32.3912';
const lomax = '-94.4578';

const urlAll = `https://opensky-network.org/api/states/all?lamin=${lamin}&lomin=${lomin}&lamax=${lamax}&lomax=${lomax}`;

// eslint-disable-next-line no-unused-vars
const createMarker = () => {
  const flightId = document.getElementById('flightList').options[document.getElementById('flightList').selectedIndex].id;
  const el = document.createElement('div');
  el.className = 'marker';
  el.style.backgroundImage = 'url(./images/airplane.png)';
  el.style.width = '20px';
  el.style.height = '20px';
  el.style.backgroundSize = '100%';

  // eslint-disable-next-line no-undef, no-unused-vars
  const marker = new mapboxgl.Marker(el)
    .setLngLat([mexicanFlights[flightId][5], mexicanFlights[flightId][6]])
    .setPopup(
      // eslint-disable-next-line no-undef
      new mapboxgl.Popup().setHTML(
        `<p>Vuelo ${mexicanFlights[flightId][1]} desde ${mexicanFlights[flightId][2]}</p>`,
      ),
    )
    .addTo(map);

  document.getElementById(flightId).setAttribute('disabled', 'true');

  myFlights.push(mexicanFlights[flightId]);
};

const FromMexicoFlights = (flights) => {
  const f = flights;
  let data = '';

  for (let i = 0; i < f.length; i += 1) {
    data += `<option id ="${i}" value ="${f[i][0]}" >Origin: ${f[i][2]}, Id: ${f[i][0]}-${f[i][1]}</option>`;
  }

  const form = `<form>
         <b> Which flight do you want to track?</b>
         <select id="flightList" >
         ${data}
         </select> 
         </form>
         <button onClick="createMarker()">Follow this airplane</button>`;

  content.innerHTML += form;
};

const checkInfo = (c, f) => {
  const cont = c;
  const flights = f;
  let html = '<h1>Data is LOADED and ready to be manipulated </h1>';
  let status = true;

  if (
    typeof flights === 'undefined'
    || flights === null
    || flights instanceof Error
  ) {
    html = '<h1>ERROR GETTING DATA</h1>';
    status = false;
  }

  cont.innerHTML = html;
  return status;
};

const loadFlights = async (url) => {
  try {
    const response = await fetch(url, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const json = await response.json();
      return json;
    }
  } catch (e) {
    return e;
  }
};

const loadStaticElements = () => {
  content.innerHTML += `<h1>Please wait between 30s to 1min</h1>
  <h2> The data is loading</h2>
  `;
  // eslint-disable-next-line no-undef
  mapboxgl.accessToken = 'pk.eyJ1IjoibW94bGV5LWtydXoiLCJhIjoiY2twb21uYXY0MDB0aDJxcGw0YnZuNWZxbyJ9.oPt_blIqKiCQlt9QkcXZMg';

  // eslint-disable-next-line no-undef
  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-99.04513062012029, 19.50113241433945],
    zoom: 4,
  });

  map.on('load', () => {
    map.resize();
  });
};

const updatePosition = async () => {
  let urlAllIcao = 'https://opensky-network.org/api/states/all?';
  let params = '';
  let response = '';

  for (let i = 0; i < myFlights.length; i += 1) {
    params += `icao24=${(myFlights[i][0])}&`;
  }

  urlAllIcao = `${urlAllIcao}${params}`;

  if (params !== '') {
    response = await loadFlights(urlAllIcao);
  }

  const flights = response.states;

  if (flights !== undefined) {
    for (let i = 0; i < flights.length; i += 1) {
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage = 'url(./images/airplane.png)';
      el.style.width = '20px';
      el.style.height = '20px';
      el.style.backgroundSize = '100%';

      // eslint-disable-next-line no-undef, no-unused-vars
      const marker = new mapboxgl.Marker(el)
        .setLngLat([flights[i][5], flights[i][6]])
        .setPopup(
          // eslint-disable-next-line no-undef
          new mapboxgl.Popup().setHTML(
            `<p>Vuelo ${flights[i][1]} desde ${flights[i][2]}</p>`,
          ),
        )
        .addTo(map);
    }
  }

  setTimeout(updatePosition, 15000);
};

(async () => {
  loadStaticElements();
  const flights = await loadFlights(urlAll);
  checkInfo(content, flights);
  mexicanFlights = flights.states.filter((item) => item[2] === 'Mexico');
  FromMexicoFlights(mexicanFlights);
  updatePosition();
})();
