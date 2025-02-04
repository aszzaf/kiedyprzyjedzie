# `getStops()`
Get all stops in selected city. Returns a Promise with array of stops.

```javascript
api.getStops()
  .then(console.log)
  .catch(console.error);
```

**Response**
```javascript
[
  {
    "id": "1141917:1195824",
    "code": 37,
    "name": "Pniewo",
    "lat": 53.34219,
    "lon": 14.52003
  },
  {
    "id": "1141894:1195789",
    "code": 2,
    "name": "RADZISZEWO Szczecińska",
    "lat": 53.43011,
    "lon": 14.53058
  }
  // ...
]
```