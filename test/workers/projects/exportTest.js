'use strict';

const assert = require('assertthat');
const path = require('path');
const processenv = require('processenv');

const workers = require(path.resolve('./lib'));

describe('projects.export...', () => {
  it('... is of type function', (done) => {
    assert.that(workers.projects.export).is.ofType('function');
    done();
  });

  it('... rejects an error when function is called without a access token', (done) => {
    (async () => {
      try {
        await workers.projects.export();
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a valid API Token!');
        done();
      }
    })();
  });

  it('... rejects an error when function is called without a id for the project', (done) => {
    (async () => {
      try {
        await workers.projects.export('abcdef');
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a valid project id!');
        done();
      }
    })();
  });

  it('... rejects an error when the export object is not defined', (done) => {
    (async () => {
      try {
        await workers.projects.export('abcdef', '1234');
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a export definition as object!');
        done();
      }
    })();
  });

  it('... rejects an error when the export object is without language key', (done) => {
    (async () => {
      try {
        await workers.projects.export('abcdef', '1234', {});
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a export definition as object!');
        done();
      }
    })();
  });

  it('... rejects an error when the export object is without type key', (done) => {
    (async () => {
      try {
        await workers.projects.export('abcdef', '1234', { language: 'de' });
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a export definition as object!');
        done();
      }
    })();
  });

  it('... must fetch the api error messages', (done) => {
    (async () => {
      try {
        await workers.projects.export('notfamoustoken', '1234', { language: 'de', type: 'json' });
      } catch (err) {
        assert.that(err).is.ofType('object');
        done();
      }
    })();
  });

  it('... must resolve a downloadlink when process is done', (done) => {
    (async () => {
      try {
        const add = await workers.projects.add(processenv('API_TOKEN'), 'exportproject');
        const res = await workers.projects.view(processenv('API_TOKEN'), add.project.id, { language: 'de', type: 'json' });

        assert.that(res.project).is.not.undefined();

        await workers.projects.delete(processenv('API_TOKEN'), add.project.id);
        done();
      } catch (err) {
        throw err;
      }
    })();
  });
});
