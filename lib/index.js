'use strict';

const workers = require('./workers');

const wrapper = {};

wrapper.list = async (token) => {
  return await workers.list(token);
};

module.exports = wrapper;
