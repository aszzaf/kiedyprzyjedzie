# `getTimetable(stopId, line, date)`
Get full timetable for specific line. Returns Promise with schedule data.

```javascript
api.getTimetable('1141917:1195824', '2', '2024-02-04')
  .then(console.log)
  .catch(console.error);
```

**Response**
```javascript
{
  "departures": [
    {
      "departure": 13260,
      "line": "2",
      "trip_id": 22837025
    },
    {
      "departure": 16860,
      "line": "2",
      "trip_id": 22837029
    }
  ],
  "main_direction": {
    "name": "RADZISZEWO Szczecińska",
    "count": 16
  }
}
```