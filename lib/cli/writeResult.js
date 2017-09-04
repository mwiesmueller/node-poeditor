'use strict';

const path = require('path');
const fs = require('fs');

const writeResult = async (fpath, content) => {
  return new Promise((resolve) => {
    console.log('** Writing Result in ' + fpath);

    fs.writeFileSync(path.resolve(fpath), JSON.stringify(content, null, 2), 'utf8');

    resolve(true);
  });
};

module.exports = writeResult;
