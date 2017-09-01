'use strict';

const assert = require('assertthat');
const path = require('path');
const processenv = require('processenv');

const workers = require(path.resolve('./lib'));

describe('list...', () => {
  it('... is of type function', (done) => {
    assert.that(workers.list).is.ofType('function');
    done();
  });

  it('... rejects an error when function is called without a access token', (done) => {
    (async () => {
      try {
        await workers.list();
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a valid API Token!');
        done();
      }
    })();
  });

  it('... must fetch the api error messages', (done) => {
    (async () => {
      try {
        await workers.list('notfamoustoken');
      } catch (err) {
        assert.that(err).is.ofType('object');
        done();
      }
    })();
  });

  it('... resolves a object when process is done', (done) => {
    (async () => {
      try {
        const res = await workers.list(processenv('API_TOKEN'));

        assert.that(res).is.ofType('object');
        assert.that(res.projects).is.not.undefined();
        done();
      } catch (err) {
        throw err;
      }
    })();
  });
});
