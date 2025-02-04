const axios = require('axios');

exports.fetch = async (city, encodedTripId, index) => {
  const url = `https://${city.prefix}.${city.domain}/api/trip_execution/[${encodedTripId}]/${index}`;
  const response = await axios.get(url);
  return response.data;
};