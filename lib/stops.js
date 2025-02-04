const axios = require('axios');

exports.fetch = async (city) => {
  const response = await axios.get(`https://${city.prefix}.${city.domain}/stops`);
  return response.data.stops.map(stop => ({
    id: stop[0],
    code: stop[1],
    name: stop[2],
    lat: stop[3] / 1_000_000,
    lon: stop[4] / 1_000_000
  }));
};