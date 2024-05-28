/**
 * JSON
 * 
 * text based format which follows javascript obj, python dic syntax
 * independent of javascript
 * JSON exits as a string which is useful to transmit data across network
 * 
 * 
 */

// const data = {"key1" : "value1", "key2" : "value2"}
// var jsonData = JSON.stringify(data)
// console.log(data)
// console.log(data.key2)

// let sampleJson = {"key1": "value1", "key2": "value2"};

// function prettyPrint(jsonData) {
//     return JSON.stringify(jsonData, null, 2)
//         .replace(/"([^"]+)":/g, '"$1" =')
//         .replace(/"/g, '')
//         .replace(/},/g, '},\n');
// }

// console.log(prettyPrint(sampleJson));

/**
 * 
 * 
 */

// const sampleJson = { 
//   "company":{ 
//      "employee":{ 
//         "name":"emma",
//         "payble":{ 
//            "salary":7000,
//            "bonus":800
//         }
//      }
//   }
// }

// const toJson = JSON.stringify(sampleJson);
// const value = sampleJson.company.employee.payble.salary
// console.log(value)


/**
 * 
 */
// const sampleData = [ 
//   { 
//      "id":1,
//      "name":"name1",
//      "color":[ 
//         "red",
//         "green"
//      ]
//   },
//   { 
//      "id":2,
//      "name":"name2",
//      "color":[ 
//         "pink",
//         "yellow"
//      ]
//   }
// ]

// const getNameKey = JSON.stringify(sampleData)
// console.log(getNameKey)

const jsonArray = [ 
  { 
     "id":1,
     "name":"name1",
     "color":[ 
        "red",
        "green"
     ]
  },
  { 
     "id":2,
     "name":"name2",
     "color":[ 
        "pink",
        "yellow"
     ]
  }
];

const names = jsonArray.map(obj => obj.name);

console.log(names); 