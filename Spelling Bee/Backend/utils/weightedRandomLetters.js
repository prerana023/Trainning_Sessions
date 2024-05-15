const vowels = {
  'a': 8.17,
  'e': 12.70,
  'i': 7.50,
  'o': 7.50,
  'u': 2.80
};

const consonants = {
  'b': 1.49,
  'c': 2.78,
  'd': 4.25,
  'f': 2.23,
  'g': 2.02,
  'h': 6.09,
  'j': 0.15,
  'k': 0.77,
  'l': 4.03, 
  'm': 2.41,
  'n': 6.75, 
  'p': 1.93,
  'q': 0.10,
  'r': 5.99, 
  's': 6.33, 
  't': 9.06, 
  'v': 0.98,
  'w': 2.36,
  'x': 0.15,
  'y': 1.97,
  'z': 0.07
};


function weightedRandom(probabilities) {
  const totalWeight = Object.values(probabilities).reduce((acc, val) => acc + val, 0);
  let random = Math.random() * totalWeight;
  for (let letter in probabilities) {
    random -= probabilities[letter];
    if (random <= 0) return letter;
  }
}

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

module.exports = { generateRandomWord}