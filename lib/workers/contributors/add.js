'use strict';

const path = require('path');
const request = require(path.resolve('./lib/workers/request')).httprequest;
const logger = require('flaschenpost').getLogger();

const addContributor = async (token, id, obj) => {
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

    if (!obj || !obj.name || !obj.email) {
      const message = 'Error: You must define a valid object!';

      logger.error(message);
      return reject(message);
    }

    let name = '';
    let email = '';
    let language = '';
    let admin = '';

    if (obj.name) {
      name = '&name=' + obj.name;
    }

    if (obj.email) {
      email = '&email=' + obj.email;
    }

    if (obj.language) {
      language = '&language=' + obj.language;
    }

    if (obj.admin) {
      admin = '&admin=' + obj.admin;
    }

    const req = {
      url: 'https://api.poeditor.com/v2/contributors/add',
      method: 'POST',
      json: true,
      body: 'api_token=' + token + '&id=' + id + name + email + language + admin,
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

module.exports = addContributor;
