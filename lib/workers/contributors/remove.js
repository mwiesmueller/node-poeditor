'use strict';

const request = require('../request').httprequest;
const logger = require('flaschenpost').getLogger();

const remove = async (token, id, obj) => {
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

    if (!obj || !obj.email) {
      const message = 'Error: You must define a valid object!';

      logger.error(message);
      return reject(message);
    }

    let email = '';
    let language = '';

    if (obj.email) {
      email = '&email=' + obj.email;
    }

    if (obj.language) {
      language = '&language=' + obj.language;
    }

    const req = {
      url: 'https://api.poeditor.com/v2/contributors/remove',
      method: 'POST',
      json: true,
      body: 'api_token=' + token + '&id=' + id + email + language,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };

    request(req, (err) => {
      if (err) {
        return reject(err);
      }

      resolve(true);
    });
  });
};

module.exports = remove;
