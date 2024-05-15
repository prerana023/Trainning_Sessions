// Adjusting the weights for vowels and consonants to favor valid words
const vowels = {
    'a': 7,
    'e': 7,
    'i': 5,
    'o': 5,
    'u': 5
};
  
const consonants = {
    'b': 5,
    'c': 5,
    'd': 5,
    'f': 5,
    'g': 5,
    'h': 5,
    'j': 5,
    'k': 5,
    'l': 10, 
    'm': 5,
    'n': 10, 
    'p': 5,
    'q': 5,
    'r': 10, 
    's': 10, 
    't': 10, 
    'v': 5,
    'w': 5,
    'x': 5,
    'y': 5,
    'z': 5
};


  // Function to generate a random letter based on weighted probabilities
  function weightedRandom(probabilities) {
    const totalWeight = Object.values(probabilities).reduce((acc, val) => acc + val, 0);
    let random = Math.random() * totalWeight;
    for (let letter in probabilities) {
      random -= probabilities[letter];
      if (random <= 0) return letter;
    }
  }
  
  // Function to generate a random word of length 7 with desired characteristics
//   function generateRandomWord() {
//     let word = '';
//     for (let i = 0; i < 7; i++) {
//       if (i % 2 === 0) { 
//         word += weightedRandom(vowels);
//       } else { 
//         word += weightedRandom(consonants);
//       }
//     }
//     return word;
//   }
  

  function generateRandomWord() {
    let randomLetters = [];
    for (let i = 0; i < 7; i++) {
        if (i % 2 === 0) { 
            randomLetters.push(weightedRandom(vowels));
        } else { 
            randomLetters.push(weightedRandom(consonants));
        }
    }
    return randomLetters.join(''); 
}

  generateRandomWord();

module.exports = { generateRandomWord}