'use strict';

const request = require('../request').httprequest;
const logger = require('flaschenpost').getLogger();

const deleteProject = async (token, id) => {
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

    const req = {
      url: 'https://api.poeditor.com/v2/projects/delete',
      method: 'POST',
      json: true,
      body: 'api_token=' + token + '&id=' + id,
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

module.exports = deleteProject;
