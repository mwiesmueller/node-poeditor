'use strict';

const assert = require('assertthat');
const path = require('path');
const processenv = require('processenv');

const workers = require(path.resolve('./lib'));

describe('projects.view...', () => {
  it('... is of type function', (done) => {
    assert.that(workers.projects.view).is.ofType('function');
    done();
  });

  it('... rejects an error when function is called without a access token', (done) => {
    (async () => {
      try {
        await workers.projects.view();
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a valid API Token!');
        done();
      }
    })();
  });

  it('... rejects an error when function is called without a id for the project', (done) => {
    (async () => {
      try {
        await workers.projects.view('abcdef');
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a valid project id!');
        done();
      }
    })();
  });

  it('... resolves the project details when process is done', (done) => {
    (async () => {
      try {
        const add = await workers.projects.add(processenv('API_TOKEN'), 'viewproject');
        const res = await workers.projects.view(processenv('API_TOKEN'), add.project.id);

        assert.that(res.project.id).is.equalTo(add.project.id);

        await workers.projects.delete(processenv('API_TOKEN'), add.project.id);
        done();
      } catch (err) {
        throw err;
      }
    })();
  });
});
