const { fetch: fetchCustomers } = require('./lib/customers');
const { fetch: fetchStops } = require('./lib/stops');
const { fetch: fetchDepartures } = require('./lib/departures');
const { fetch: fetchTimetable } = require('./lib/timetable');
const { fetch: fetchTripDetails } = require('./lib/tripDetails');

class PublicTransport {
  constructor() {
    this.customers = null;
    this.selectedCity = null;
  }

  async init() {
    this.customers = await fetchCustomers();
    return this.customers;
  }

  selectCity(prefix) {
    const city = this.customers.find(c => c.prefix === prefix);
    if (!city) throw new Error(`City with prefix "${prefix}" not found`);
    this.selectedCity = city;
    return city;
  }

  async getStops() {
    this.#checkCitySelected();
    return fetchStops(this.selectedCity);
  }

  async getDepartures(stopId) {
    this.#checkCitySelected();
    return fetchDepartures(this.selectedCity, stopId);
  }

  async getTimetable(stopId, line, date) {
    this.#checkCitySelected();
    return fetchTimetable(this.selectedCity, stopId, line, date);
  }

  async getTripDetails(encodedTripId, index) {
    this.#checkCitySelected();
    return fetchTripDetails(this.selectedCity, encodedTripId, index);
  }

  #checkCitySelected() {
    if (!this.selectedCity) {
      throw new Error('No city selected. Call selectCity() first');
    }
  }
}

module.exports = PublicTransport;