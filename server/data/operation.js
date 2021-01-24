const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '/books.json');
const readFile = (
  callback,
  returnJson = false,
  filePath = dataPath,
  encoding = 'utf8'
) => {
  fs.readFile(filePath, encoding, (err, data) => {
    if (err) {
      throw err;
    }

    callback(returnJson ? JSON.parse(data) : data);
  });
};

const writeFile = (
  fileData,
  callback,
  filePath = dataPath,
  encoding = 'utf8'
) => {
  fs.writeFile(filePath, fileData, encoding, err => {
    if (err) {
      throw err;
    }

    callback();
  });
};

module.exports = {readFile, writeFile};
