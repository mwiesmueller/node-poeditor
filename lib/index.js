'use strict';

const projects = require('./workers/projects');

const wrapper = {
  projects: {}
};

wrapper.projects.list = async (token) => {
  return await projects.list(token);
};

wrapper.projects.add = async (token, name, description) => {
  return await projects.add(token, name, description);
};

module.exports = wrapper;
