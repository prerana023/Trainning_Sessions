require('dotenv').config({path: './.env' })

const express = require('express');
const bodyParser = require('body-parser');
const { generateRandomWord } = require('./utils/weightedRandomLetters');

const app = express();

app.use(bodyParser.json());

const guessedWords = [];

app.post('/guess-word', (req, res) => {
    const word = req.body.word;

    if (!word || typeof word !== 'string') {
        return res.status(400).json({ message: 'Invalid word format' });
    }

    isValidWord(word.toLowerCase())
        .then(valid => {
            if (valid) {
                guessedWords.push(word.toLowerCase());
                res.status(200).json({ message: 'Word is valid!' });
            } else {
                res.status(400).json({ message: 'Word is not valid.' });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).json({ message: 'Failed to validate word. Please try again.' });
        });
});

function isValidWord(word) {
    const apiUrl = 'https://api.api-ninjas.com/v1/dictionary?word=' + word;
    
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'X-Api-Key': 'DICTIONARY_API_KEY'
        }
    })
    .then(response => response.json())
    .then(data => {
        return data.valid === true;
    });
}

app.get('/', (req, res) => {
    const randomLetters = generateRandomWord();
    console.log("Random letters",randomLetters)
    res.send(randomLetters);
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
