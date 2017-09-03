'use strict';

const assert = require('assertthat');
const path = require('path');
const processenv = require('processenv');

const workers = require(path.resolve('./lib'));

let projectid;

describe('projects.add...', () => {
  it('... is of type function', (done) => {
    assert.that(workers.projects.add).is.ofType('function');
    done();
  });

  it('... rejects an error when function is called without a access token', (done) => {
    (async () => {
      try {
        await workers.projects.add();
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a valid API Token!');
        done();
      }
    })();
  });

  it('... rejects an error when function is called without a name for the project', (done) => {
    (async () => {
      try {
        await workers.projects.add('abcdef');
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a name for your new project!');
        done();
      }
    })();
  });

  it('... must fetch the api error messages', (done) => {
    (async () => {
      try {
        await workers.projects.add('notfamoustoken', 'testproject');
      } catch (err) {
        assert.that(err).is.ofType('object');
        done();
      }
    })();
  });

  it('... resolvse the project object when process is done', (done) => {
    (async () => {
      try {
        const res = await workers.projects.add(processenv('API_TOKEN'), 'testproject');

        assert.that(res).is.ofType('object');
        assert.that(res.project).is.not.undefined();

        projectid = res.project.id;
        done();
      } catch (err) {
        throw err;
      }
    })();
  });

  it('... must reject an error when project already famous in the api', (done) => {
    (async () => {
      try {
        await workers.projects.add(processenv('API_TOKEN'), 'testproject');
      } catch (err) {
        assert.that(err).is.equalTo('Error: The named project is already famous in the PO Editor API.');
        done();
      }
    })();
  });

  it('... delete the project that your account is clean', (done) => {
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
