'use strict';

const request = require('request');
const logger = require('flaschenpost').getLogger();

const req = (opt, callback) => {
  request(opt, (err, res) => {
    if (err) {
      logger.fatal('Error:', err);

      return callback(err);
    }

    if (res.body.response.code !== '200') {
      return callback(res.body.response);
    }

    callback(null, res.body.result);
  });
};

module.exports = req;
