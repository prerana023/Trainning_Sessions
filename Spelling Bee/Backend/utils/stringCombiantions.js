// Check combination once with list
function generateCombinations(str, minLength, maxLength) {
    const combinations = [];
    const centerLetter = str[3]; // Assuming the center letter is at index 3

    function backtrack(startIndex, currentCombination) {
        if (currentCombination.length >= minLength && currentCombination.includes(centerLetter)) {
            combinations.push(currentCombination);
        }

        if (currentCombination.length >= maxLength) {
            return; // Stop further exploration
        }

        for (let i = startIndex; i < str.length; i++) {
            backtrack(i, currentCombination + str[i]); // Increment i to avoid repetition
        }
    }

    backtrack(0, '');
    
    return combinations.sort((a, b) => b.length - a.length);
}

module.exports = { generateCombinations };


// const fs = require('fs');
// const dictionary = fs.readFileSync('./utils/filtered_words.txt', 'utf8').split('\n');

// function generateCombinations(str, minLength, maxLength) {
//     const combinations = [];
//     const centerLetter = str[3]; // Assuming the center letter is at index 3

//     function backtrack(startIndex, currentCombination) {
//         if (currentCombination.length >= minLength && currentCombination.includes(centerLetter)) {
//             combinations.push(currentCombination);
//         }

//         if (currentCombination.length >= maxLength) {
//             return; 
//         }

//         for (let i = startIndex; i < str.length; i++) {
//             backtrack(i, currentCombination + str[i]); // Allow repeating the same letter
//         }
//     }

//     backtrack(0, '');

//     const validWords = combinations.filter(word => dictionary.includes(word.toLowerCase()));

//     const setsOfValidWords = [];
//     for (let i = 0; i < validWords.length; i++) {
//         for (let j = i + 1; j < validWords.length; j++) {
//             const set = [validWords[i], validWords[j]];
//             if (set.every(word => !setsOfValidWords.flat().includes(word))) {
//                 setsOfValidWords.push(set);
//             }
//             if (setsOfValidWords.length >= 15) {
//                 return setsOfValidWords;
//             }
//         }
//     }

//     return setsOfValidWords;
// }

// module.exports = { generateCombinations };


