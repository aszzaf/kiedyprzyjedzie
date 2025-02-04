# `getTripDetails(encodedTripId, index)`
Get detailed trip information. Returns Promise with trip itinerary.

```javascript
api.getTripDetails('WmFkYW5pZSA3Mjo3MzkyODY6MA==', 4)
  .then(console.log)
  .catch(console.error);
```

**Response**
```javascript
{
  "trip": {
    "times": [
      {
        "stop_name": "NOWE CZARNOWO - DOLNA ODRA",
        "departure_time": "03:35",
        "index": 0
      },
      {
        "stop_name": "Pniewo",
        "departure_time": "03:41",
        "index": 4
      }
    ],
    "direction": "RADZISZEWO Szczecińska",
    "line": {
      "name": "2"
    }
  }
}
```