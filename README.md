# KiedyPrzyjedzie.pl

**Unofficial JavaScript client for [KiedyPrzyjedzie.pl](https://kiedyprzyjedzie.pl/) public transport system.**  
This library provides programmatic access to real-time public transport data (buses, trams, and other services) available through the KiedyPrzyjedzie.pl platform. It allows developers to retrieve information about stops, departures, timetables, and trip details for various cities in Poland.

**Important Notice:**  
This library is **unofficial** and uses endpoints provided by KiedyPrzyjedzie.pl. It is intended for educational and personal use only. If you plan to use this library in a production environment or for commercial purposes, **you must obtain explicit permission from the operator** of KiedyPrzyjedzie.pl. Unauthorized use may violate their terms of service.

---

## Features

- Retrieve a list of supported cities and operators.
- Fetch real-time departures for any stop.
- Access detailed timetables for specific lines.
- Get trip details, including stops and schedules.
- Easy-to-use, promise-based API.
- Lightweight and dependency-free (except for `axios`).

---


## Installation

```bash
npm install kiedyprzyjedzie
```

## Quick Start

```javascript
const KiedyPrzyjedzie = require('kiedyprzyjedzie');
const api = new KiedyPrzyjedzie();

async function example() {
  try {
    // Initialize and select city
    await api.init();
    api.selectCity('pksszczecin'); // e.g., 'abx2bus', 'augustow'
    
    // Fetch stops and departures
    const stops = await api.getStops();
    const departures = await api.getDepartures('1141917:1195824');
    
    console.log('Available cities:', await api.init());
    console.log('First stop:', stops[0]);
    console.log('Next departures:', departures.rows);
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

example();
```

## Documentation

### `init()`
Initializes the module and fetches available cities/operators

**Returns:**  
`Promise<Array>` - List of city objects:
```javascript
{
  name: String,    // Full operator name
  prefix: String,  // Unique city identifier
  domain: String   // System domain
}
```

---

### `selectCity(prefix)`
Select city for subsequent queries

**Parameters:**  
- `prefix` (String) - Unique city identifier (e.g., 'pksszczecin')

---

### `getStops()`
Retrieves all stops in selected city

**Returns:**  
`Promise<Array>` - List of stops:
```javascript
[{
  id: String,      // Stop ID (e.g., "1141917:1195824")
  code: Number,    // Stop number
  name: String,    // Stop name
  lat: Number,     // Latitude
  lon: Number      // Longitude
}]
```

---

### `getDepartures(stopId)`
Gets real-time departures from a stop

**Parameters:**  
- `stopId` (String) - Stop ID in "1141917:1195824" format

**Returns:**  
`Promise<Object>` - Departure data:
```javascript
{
  rows: [{
    time: String,           // Scheduled departure time
    direction: String,      // Trip direction
    line: String,           // Line number
    platform: String        // Platform/stop number
  }],
  directions: Object        // Direction mappings
}
```

---

### `getTimetable(stopId, line, date)`
Retrieves full timetable for a line

**Parameters:**  
- `stopId` (String) - Stop ID
- `line` (String) - Line number
- `date` (String) - Date in YYYY-MM-DD format

---

### `getTripDetails(encodedTripId, index)`
Gets detailed trip information

**Parameters:**  
- `encodedTripId` (String) - Base64-encoded trip ID
- `index` (Number) - Stop index in route

---

⚠️ **Important:** This module uses an unofficial API. Use for educational/personal purposes only. Contact KiedyPrzyjedzie.pl operator before commercial use.