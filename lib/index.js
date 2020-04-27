'use strict';

const projects = require('./workers/projects');
const languages = require('./workers/languages');
const terms = require('./workers/terms');
const contributors = require('./workers/contributors');

const wrapper = {
  projects: {},
  languages: {},
  terms: {},
  contributors: {}
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

wrapper.languages.list = async (token, id) => {
  return await languages.list(token, id);
};

wrapper.languages.add = async (token, id, lang) => {
  return await languages.add(token, id, lang);
};

wrapper.languages.delete = async (token, id, lang) => {
  return await languages.delete(token, id, lang);
};

// Terms
wrapper.terms.list = async (token, id, lang) => {
  return await terms.list(token, id, lang);
};

wrapper.terms.add = async (token, id, data) => {
  return await terms.add(token, id, data);
};

wrapper.terms.update = async (token, id, data) => {
  return await terms.update(token, id, data);
};

wrapper.terms.delete = async (token, id, data) => {
  return await terms.delete(token, id, data);
};

wrapper.contributors.list = async (token, id, lang) => {
  return await contributors.list(token, id, lang);
};

wrapper.contributors.add = async (token, id, obj) => {
  return await contributors.add(token, id, obj);
};

wrapper.contributors.remove = async (token, id, obj) => {
  return await contributors.remove(token, id, obj);
};

module.exports = wrapper;
