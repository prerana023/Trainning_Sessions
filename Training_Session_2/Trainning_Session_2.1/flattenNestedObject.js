//Problem: Write a recursive program to flatten a nested dictionary. The dictionary can be nested to any levels.


/**
 * 
 * This function takes an object as input and iterate through both inner and outer keys to create new Key then returnsnew object
 * 
 * 
 * @param {object} dictionary 
 * @returns Input objects in an key-values pair array
 */


function flattenDictionary(dictionary) {
    const flattened = {};
  
    for (const [key, value] of Object.entries(dictionary)) {
      for (const [innerKey, innerValue] of Object.entries(value)) {
        console.log(Object.entries(value));
        const newKey = `${key}_${innerKey}`; 
        flattened[newKey] = innerValue;
      }
    }
  
    return console.log("Flattened Dictionary: ",flattened);
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
  
 flattenDictionary(cars);  
