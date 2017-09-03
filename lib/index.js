'use strict';

const projects = require('./workers/projects');
const languages = require('./workers/languages');

const wrapper = {
  projects: {},
  languages: {}
};

// Projects
wrapper.projects.list = async (token) => {
  return await projects.list(token);
};

wrapper.projects.add = async (token, name, description) => {
  return await projects.add(token, name, description);
};

wrapper.projects.view = async (token, id) => {
  return await projects.view(token, id);
};

wrapper.projects.update = async (token, id, obj) => {
  return await projects.update(token, id, obj);
};

wrapper.projects.sync = async (token, id, obj) => {
  return await projects.sync(token, id, obj);
};

wrapper.projects.delete = async (token, id) => {
  return await projects.delete(token, id);
};

wrapper.projects.export = async (token, id, obj) => {
  return await projects.export(token, id, obj);
};

// Languages
wrapper.languages.available = async (token) => {
  return await languages.available(token);
};

module.exports = wrapper;
