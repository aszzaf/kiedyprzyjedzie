const axios = require('axios');

exports.fetch = async () => {
  const response = await axios.get('https://${city.prefix}.kiedyprzyjedzie.pl/api/customers');
  return response.data.customers;
};