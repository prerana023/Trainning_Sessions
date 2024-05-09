const fs = require('fs');

function mergeFiles(file1Path, file2Path, outputPath) {
    const lines1 = fs.readFileSync(file1Path, 'utf8').split('\n');
    const lines2 = fs.readFileSync(file2Path, 'utf8').split('\n');
    const mergedLines = [];

    const maxLength = Math.max(lines1.length, lines2.length);
    for (let i = 0; i < maxLength; i++) {
        const line2 = lines2[i]; 
        mergedLines.push(`${line2}`);
        console.log()
    }

    fs.writeFileSync(outputPath, mergedLines.join(''));
}

const file1Path = './Files/file1.txt';
const file2Path = './Files/file2.txt';
const outputPath = './Files/merged.txt';
mergeFiles(file1Path, file2Path, outputPath);

