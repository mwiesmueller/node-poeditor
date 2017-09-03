'use strict';

const path = require('path');
const request = require(path.resolve('./lib/workers/request')).httprequest;
const logger = require('flaschenpost').getLogger();

const updateProject = async (token, id, obj) => {
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

    if (!obj) {
      const message = 'Error: You must define a update object!';

      logger.error(message);
      return reject(message);
    }

    let name = '';
    let description = '';
    let refLang = '';

    if (obj.name) {
      name = '&name=' + obj.name;
    }

    if (obj.description) {
      description = '&description=' + obj.description;
    }

    if (obj.refLang) {
      refLang = '&reference_language=' + obj.refLang;
    }

    const req = {
      url: 'https://api.poeditor.com/v2/projects/update',
      method: 'POST',
      json: true,
      body: 'api_token=' + token + '&id=' + id + name + description + refLang,
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

module.exports = updateProject;
