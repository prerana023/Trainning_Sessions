const fs = require('fs');
const path = require('path');


/**
 * 
 * This function takes directory and filename if the filename exists in the directiory it returns the full path
 * 
 * @param {string} directory 
 * @param {string} filename 
 * @returns Error Message/File path to the given filename
 */


function searchFile(directory, filename) {
  if (!fs.existsSync(directory)) {
    throw new Error(`Invalid directory path: ${directory}`);
  }

  function searchDirectory(dirPath) {
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);

      if (stats.isFile() && file.toLowerCase() === filename.toLowerCase()) {
        return filePath; 
      }

      if (stats.isDirectory()) {
        const foundPath = searchDirectory(filePath);
        if (foundPath) {
          return foundPath;
        }
      }
    }
    return null; 
  }

  const filePath = searchDirectory(directory);
  return filePath ? filePath : 'File not found';
}

const directory = 'E:/Trainning/Training_Session_2/Trainning_Session_2.1';
const filename = 'script.js';

try {
  const fullPath = searchFile(directory, filename);
  console.log(fullPath);
} catch (error) {
  console.error(error.message);
}
