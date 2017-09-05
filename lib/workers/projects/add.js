'use strict';

const request = require('../request').httprequest;
const logger = require('flaschenpost').getLogger();
const list = require('./list');

const add = async (token, name, description) => {
  return new Promise((resolve, reject) => {
    if (!token) {
      const message = 'Error: You must define a valid API Token!';

      logger.error(message);
      return reject(message);
    }

    if (!name) {
      const message = 'Error: You must define a name for your new project!';

      logger.error(message);
      return reject(message);
    }

    if (!description) {
      description = '';
    }

    (async () => {
      try {
        const res = await list(token);

        for (let i = 0; i < res.projects.length; i++) {
          if (res.projects[i].name === name) {
            const message = 'Error: The named project is already famous in the PO Editor API.';

            logger.error(message);
            return reject(message);
          }
        }

        const req = {
          url: 'https://api.poeditor.com/v2/projects/add',
          method: 'POST',
          json: true,
          body: 'api_token=' + token + '&name=' + name + '&description=' + description,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        };

        request(req, (err, response) => {
          if (err) {
            return reject(err);
          }

          resolve(response);
        });
      } catch (err) {
        reject(err);
      }
    })();
  });
};

module.exports = add;
