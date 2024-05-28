const fs = require('fs');

fs.readFile('./Files/words.txt', 'utf8', (err, fileContent) => {
    if (err) {
        console.error(err);
    }

    function countWords(text) {
        const words = text.split(/\s+/);
        const wordCounts = {};
        
        words.forEach(word => {
            word = word.trim(); 
            if (word) {
                if (wordCounts[word]) {
                    wordCounts[word]++;
                } else {
                    wordCounts[word] = 1;
                }
            }
        });

        return wordCounts;
    }

    const wordFrequency = countWords(fileContent);

    for (const word in wordFrequency) {
        console.log(`${word}: ${wordFrequency[word]}`);
    }
});
