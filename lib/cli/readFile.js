'use strict';

const path = require('path');
const fs = require('fs');

const readFile = async (fpath) => {
  return new Promise((resolve) => {
    resolve(fs.readFileSync(path.resolve(fpath), 'utf8'));
  });
};

module.exports = readFile;
