'use strict';

const request = require('../request').httprequest;
const logger = require('flaschenpost').getLogger();

const updateTerms = async (token, id, data) => {
  return new Promise((resolve, reject) => {
    if (!token) {
      const message = 'Error: You must define a valid API Token!';

      logger.error(message);
      return reject(message);
    }

    if (!id) {
      const message = 'Error: You must define a valid project id!';

      logger.error(message);
      return reject(message);
    }

    if (!data || typeof data !== 'object') {
      const message = 'Error: You must define a valid data object';

      logger.error(message);
      return reject(message);
    }

    const req = {
      url: 'https://api.poeditor.com/v2/terms/update',
      method: 'POST',
      json: true,
      body: 'api_token=' + token + '&id=' + id + '&data=' + JSON.stringify(data),
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

module.exports = updateTerms;
