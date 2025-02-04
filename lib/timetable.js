const axios = require('axios');
const { Buffer } = require('buffer');

exports.fetch = async (city, stopId, line, date) => {
  const encodedLine = Buffer.from(line).toString('base64');
  const url = `https://${city.prefix}.${city.domain}/api/timetable/${stopId}/[${encodedLine}]?date=${date}`;
  const response = await axios.get(url);
  return response.data;
};