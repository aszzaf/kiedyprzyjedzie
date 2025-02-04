# `getDepartures(stopId)`
Get departures from specific stop. Returns Promise with real-time data.

```javascript
api.getDepartures('1141917:1195824')
  .then(console.log)
  .catch(console.error);
```

**Response**
```javascript
{
  "rows": [
    {
      "time": "03:41",
      "direction": "RADZISZEWO Szczecińska",
      "line": "2",
      "platform": "2"
    },
    {
      "time": "04:15",
      "direction": "GRYFINO,P.DW.",
      "line": "6",
      "platform": "1"
    }
  ],
  "directions": {
    "1195824000": "RADZISZEWO Szczecińska"
  }
}
```