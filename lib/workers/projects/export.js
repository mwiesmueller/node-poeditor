'use strict';

const request = require('../request').httprequest;
const logger = require('flaschenpost').getLogger();

const exportProject = async (token, id, obj) => {
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

    if (!obj || !obj.language || !obj.type) {
      const message = 'Error: You must define a export definition as object!';

      logger.error(message);
      return reject(message);
    }

    let filters = '';
    let tags = '';

    if (obj.filters) {
      filters = '&filters=' + obj.filters;
    }

    if (obj.tags) {
      tags = '&tags=' + obj.tags;
    }

    const req = {
      url: 'https://api.poeditor.com/v2/projects/export',
      method: 'POST',
      json: true,
      body: 'api_token=' + token + '&id=' + '&language=' + obj.language + '&type=' + obj.type + filters + tags,
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

module.exports = exportProject;
