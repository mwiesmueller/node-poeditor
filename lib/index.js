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

wrapper.projects.delete = async (token, id) => {
  return await projects.delete(token, id);
};

module.exports = wrapper;
