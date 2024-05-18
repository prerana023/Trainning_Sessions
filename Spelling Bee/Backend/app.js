require('dotenv').config({path: './.env' })

const express = require('express');
const bodyParser = require('body-parser');
const { generateRandomWord } = require('./utils/weightedRandomLetters');
const { generateCombinations } = require('./utils/stringCombiantions');

const app = express();

app.use(bodyParser.json());


app.get('/', (req, res) => {
    const randomLetters = generateRandomWord();
    console.log("Random letters",randomLetters)
    
    const minLength = 4; 
    const maxLength = 7;
    const combinations = generateCombinations(randomLetters, minLength, maxLength);
    console.log("Combinations:", combinations);

    res.send( combinations);
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// require('dotenv').config({ path: './.env' });

// const express = require('express');
// const bodyParser = require('body-parser');
// const { generateRandomWord } = require('./utils/weightedRandomLetters');
// const { generateCombinations } = require('./utils/stringCombiantions');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// app.use(bodyParser.json());

// const filteredWordsPath = path.join(__dirname, 'filtered_words.txt');
// let filteredWords = new Set();

// function loadFilteredWords() {
//     const data = fs.readFileSync(filteredWordsPath, 'utf8');
//     filteredWords = new Set(data.split(/\r?\n/));
// }

// loadFilteredWords();

// app.get('/', (req, res) => {
//     let validCombinations = [];

//     while (true) {
//         const randomLetters = generateRandomWord();
//         console.log("Random letters:", randomLetters);

//         const minLength = 4;
//         const maxLength = 8;
//         const combinations = generateCombinations(randomLetters, minLength, maxLength);
//         console.log("Combinations:", combinations);

//         const matchingCombination = combinations.find(comb => comb.length === 7 && filteredWords.has(comb));

//         if (matchingCombination) {
//             validCombinations.push(matchingCombination);
//             break;
//         }
//     }

//     res.send(validCombinations);
// });

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


//const guessedWords = [];

// app.post('/guess-word', (req, res) => {
//     const word = req.body.word;

//     if (!word || typeof word !== 'string') {
//         return res.status(400).json({ message: 'Invalid word format' });
//     }

//     isValidWord(word.toLowerCase())
//         .then(valid => {
//             if (valid) {
//                 guessedWords.push(word.toLowerCase());
//                 res.status(200).json({ message: 'Word is valid!' });
//             } else {
//                 res.status(400).json({ message: 'Word is not valid.' });
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             res.status(500).json({ message: 'Failed to validate word. Please try again.' });
//         });
// });

// function isValidWord(word) {
//     const apiUrl = 'https://api.api-ninjas.com/v1/dictionary?word=' + word;
    
//     return fetch(apiUrl, {
//         method: 'GET',
//         headers: {
//             'X-Api-Key': 'DICTIONARY_API_KEY'
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         return data.valid === true;
//     });
// }
