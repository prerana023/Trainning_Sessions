const express = require('express');
const app = express();

const { generateRandomWord } = require('./utils/weightedRandomLetters');

// Define a route
app.get('/', (req, res) => {
    const randomLetters = generateRandomWord();
    res.send("Some random letters: " + randomLetters);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
