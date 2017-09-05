'use strict';

const assert = require('assertthat');
const path = require('path');
const processenv = require('processenv');

const workers = require(path.resolve('./lib'));

describe('contributors.list...', () => {
  it('... is of type function', (done) => {
    assert.that(workers.contributors.list).is.ofType('function');
    done();
  });

  it('... rejects an error when function is called without a access token', (done) => {
    (async () => {
      try {
        await workers.contributors.list();
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a valid API Token!');
        done();
      }
    })();
  });

  it('... rejects an error when function is called without a id for the project', (done) => {
    (async () => {
      try {
        await workers.contributors.list('abcdef');
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a valid project id!');
        done();
      }
    })();
  });

  it('... must fetch the api error messages', (done) => {
    (async () => {
      try {
        await workers.contributors.list('notfamoustoken', '1234', 'de');
      } catch (err) {
        assert.that(err).is.ofType('object');
        done();
      }
    })();
  });

  it('... must resolve all contributors from the project when process is done', (done) => {
    (async () => {
      try {
        const add = await workers.projects.add(processenv('API_TOKEN'), 'listContrib');
        const res = await workers.contributors.list(processenv('API_TOKEN'), add.project.id, 'de');

        assert.that(res.contributors).is.not.undefined();
        await workers.projects.delete(processenv('API_TOKEN'), add.project.id);
        done();
      } catch (err) {
        throw err;
      }
    })();
  });
});
