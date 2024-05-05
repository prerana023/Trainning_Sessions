//Problem: Write a recursive program to flatten a nested dictionary. The dictionary can be nested to any levels.


function flattenDictionary(dictionary) {
    const flattened = {};
  
    for (const [key, value] of Object.entries(dictionary)) {
      for (const [innerKey, innerValue] of Object.entries(value)) {
        const newKey = `${key}_${innerKey}`; 
        flattened[newKey] = innerValue;
      }
    }
  
    return flattened;
  }
  
  const cars = {
    'mustang': {
      'brand': 'Ford',
      'model': 'Mustang',
      'year': 1964
    },
    'i7': {
      'brand': 'BMW',
      'model': 'i7',
      'year': 1965
    },
    'x': {
      'brand': 'Tesla',
      'model': 'X',
      'year': 2020
    }
  };
  
  const newCars = flattenDictionary(cars);  
  console.log(newCars);