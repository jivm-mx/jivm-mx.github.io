// https://opensky-network.org/api/states/all?lamin=13.979002559411905&lomin=-114.7385961862692&lamax=32.39122915883972&lomax=-94.4578347389994
// min = 13.979002559411905, -114.7385961862692
// max = 32.39122915883972, -94.4578347389994

// flights of:
// https://opensky-network.org/api/flights/aircraft?icao24=0d07f0&begin=1622448360&end=1623656525

// https://opensky-network.org/api/tracks/all?icao24=0d07f0&time=1623524002

const content = document.getElementById('content');
let flights = JSON.parse(sessionStorage.getItem('preloadFlights'));
let mexicanFlights = [];
const myFlights = [];
let map = '{}';

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

const FromMexicoFlights = (flightsValues) => {
  const f = flightsValues;
  let data = '';

  for (let i = 0; i < f.length; i += 1) {
    data += `<option id ="${i}" value ="${f[i][0]}" >Origin: ${f[i][2]}, Id: ${f[i][0]}-${f[i][1]}</option>`;
  }

  const form = `<form>
         <select id="flightList" >
         ${data}
         </select> 
         </form>
         <button onClick="createMarker()">Follow this airplane</button>`;

  content.innerHTML += form;
};

const checkInfo = (c, f) => {
  const cont = c;
  const flightData = f;
  let html = '<h1>Which flight do you want to track?</h1>';
  let status = true;

  if (
    typeof flightData === 'undefined'
    || flightData === null
    || flightData instanceof Error
  ) {
    html = `<h1>Unable to load the data, due to <em>${flightData}</em> condition</h1>
    <h2><button onclick="window.location.reload()">Please refresh this page to try again :(</button></h2> `;
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
  content.innerHTML += `<h1>Fetching data from OpenSky API, please wait...</h1>
  <h2>Status: downloading the data</h2>
  `;
  /* TODO: Hide access key :( */
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

  const updatedFlights = response.states;

  if (updatedFlights !== undefined) {
    for (let i = 0; i < updatedFlights.length; i += 1) {
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage = 'url(./images/airport_blue.svg)';
      el.style.width = '20px';
      el.style.height = '20px';
      el.style.backgroundSize = '100%';

      // eslint-disable-next-line no-undef, no-unused-vars
      const marker = new mapboxgl.Marker(el)
        .setLngLat([updatedFlights[i][5], updatedFlights[i][6]])
        .setPopup(
          // eslint-disable-next-line no-undef
          new mapboxgl.Popup().setHTML(
            `<p>Vuelo ${updatedFlights[i][1]} desde ${updatedFlights[i][2]}</p>`,
          ),
        )
        .addTo(map);
    }
  }

  setTimeout(updatePosition, 15000);
};

(async () => {
  loadStaticElements();

  if (
    typeof flights === 'undefined'
    || flights === null
    || flights instanceof Error
  ) {
    const lamin = '13.9790';
    const lomin = '-114.7385';
    // const lamax = '32.3912';
    // const lomax = '-94.4578';
    const lamax = '26.2203';
    const lomax = '-97.4222';
    const urlAll = `https://opensky-network.org/api/states/all?lamin=${lamin}&lomin=${lomin}&lamax=${lamax}&lomax=${lomax}`;
    flights = await loadFlights(urlAll);
  }

  const status = checkInfo(content, flights);

  if (status) {
    // console.log(`Total flights: ${flights.states.length}`);
    mexicanFlights = flights.states.filter((item) => item[2] === 'Mexico');
    FromMexicoFlights(mexicanFlights);
    updatePosition();
  }
})();
