'use strict';

const assert = require('assertthat');
const path = require('path');
const processenv = require('processenv');

const workers = require(path.resolve('./lib'));

describe('languages.delete...', () => {
  it('... is of type function', (done) => {
    assert.that(workers.languages.delete).is.ofType('function');
    done();
  });

  it('... rejects an error when function is called without a access token', (done) => {
    (async () => {
      try {
        await workers.languages.delete();
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a valid API Token!');
        done();
      }
    })();
  });

  it('... rejects an error when function is called without a project id', (done) => {
    (async () => {
      try {
        await workers.languages.delete('1234');
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a valid project id!');
        done();
      }
    })();
  });

  it('... rejects an error when function is called without a valid languagecode', (done) => {
    (async () => {
      try {
        await workers.languages.delete('1234', 'abc');
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a valid languagecode!');
        done();
      }
    })();
  });

  it('... must fetch the api error messages', (done) => {
    (async () => {
      try {
        await workers.languages.delete('notfamoustoken', '12345', 'de');
      } catch (err) {
        assert.that(err).is.ofType('object');
        done();
      }
    })();
  });

  it('... must resolve true when process is done', (done) => {
    (async () => {
      try {
        const add = await workers.projects.add(processenv('API_TOKEN'), 'addLanguage');

        await workers.languages.add(processenv('API_TOKEN'), add.project.id, 'de');

        const res = await workers.languages.delete(processenv('API_TOKEN'), add.project.id, 'de');

        assert.that(res).is.true();

        await workers.projects.delete(processenv('API_TOKEN'), add.project.id);
        done();
      } catch (err) {
        throw err;
      }
    })();
  });
});
