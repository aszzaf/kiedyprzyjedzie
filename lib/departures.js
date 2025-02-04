const axios = require('axios');

exports.fetch = async (city, stopId) => {
  const url = `https://${city.prefix}.${city.domain}/api/departures/${stopId}`;
  const response = await axios.get(url);
  return response.data;
};