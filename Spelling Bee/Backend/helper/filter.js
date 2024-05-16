const fs = require('fs');

function filterDictionary(inputFile, outputFile) {
    fs.readFile(inputFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        
        const words = data.split('\n').filter(word => word.length > 4);
        const filteredData = words.join('\n');
        
        fs.writeFile(outputFile, filteredData, 'utf8', err => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log('Filtered dictionary written to', outputFile);
        });
    });
}

const inputFile = '../words.txt'; 
const outputFile = '../filtered_words.txt'; 

filterDictionary(inputFile, outputFile);
