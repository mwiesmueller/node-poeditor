'use strict';

const assert = require('assertthat');
const path = require('path');
const processenv = require('processenv');

const workers = require(path.resolve('./lib'));

let projectid;

describe('projects.delete...', () => {
  it('... is of type function', (done) => {
    assert.that(workers.projects.delete).is.ofType('function');
    done();
  });

  it('... rejects an error when function is called without a access token', (done) => {
    (async () => {
      try {
        await workers.projects.delete();
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a valid API Token!');
        done();
      }
    })();
  });

  it('... rejects an error when function is called without a id for the project', (done) => {
    (async () => {
      try {
        await workers.projects.delete('abcdef');
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a valid project id!');
        done();
      }
    })();
  });

  it('... must fetch the api error messages', (done) => {
    (async () => {
      try {
        await workers.projects.add('notfamoustoken', '1234');
      } catch (err) {
        assert.that(err).is.ofType('object');
        done();
      }
    })();
  });

  it('... add a TestProject to delete', (done) => {
    (async () => {
      try {
        const res = await workers.projects.add(processenv('API_TOKEN'), 'deleteTest');

        assert.that(res).is.ofType('object');
        assert.that(res.project).is.not.undefined();

        projectid = res.project.id;
        done();
      } catch (err) {
        throw err;
      }
    })();
  });

  it('... resolves true when process is done', (done) => {
    (async () => {
      try {
        const res = await workers.projects.delete(processenv('API_TOKEN'), projectid);

        assert.that(res).is.true();
        done();
      } catch (err) {
        throw err;
      }
    })();
  });
});
