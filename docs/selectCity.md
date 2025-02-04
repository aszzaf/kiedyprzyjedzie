# `selectCity(prefix)`
Select city for subsequent queries. Must be called after initialization.

```javascript
api.init()
  .then(() => {
    api.selectCity('pksszczecin');
    console.log('City selected');
  });
```

**Parameters**  
- `prefix` (String) - City identifier from init() response