'use strict';

const request = require('./request');
const logger = require('flaschenpost').getLogger();

const list = async (token) => {
  return new Promise((resolve, reject) => {
    if (!token) {
      const message = 'Error: You must define a valid API Token!';

      logger.error(message);
      return reject(message);
    }

    const req = {
      url: 'https://api.poeditor.com/v2/projects/list',
      method: 'POST',
      json: true,
      body: 'api_token=' + token,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };

    request(req, (err, res) => {
      if (err) {
        return reject(err);
      }

      resolve(res);
    });
  });
};

module.exports = list;
