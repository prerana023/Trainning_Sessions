const fs = require('fs');

// Load dictionary from a text file
const dictionary = fs.readFileSync('./filtered_words.txt', 'utf-8').split('\n').map(word => word.trim());

// Function to check if a word is a pangram
function isPangram(word) {
    const letters = new Set(word.split(''));
    return letters.size === 7;
}

// Function to generate a random string of length 7 forming a pangram if possible
function generateRandomPangram() {
    let randomString;
    do {
        randomString = ''; 
        for (let i = 0; i < 7; i++) {
            const randomIndex = Math.floor(Math.random() * 26); // 26 letters in the alphabet
            randomString += String.fromCharCode(97 + randomIndex); // Convert random index to character code
        }
    } while (!isPangram(randomString));
    return randomString;
}

// Generate a random pangram and log it
const randomPangram = generateRandomPangram();
console.log('Random pangram:', randomPangram);
