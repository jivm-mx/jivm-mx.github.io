// eslint-disable-next-line no-unused-vars
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
