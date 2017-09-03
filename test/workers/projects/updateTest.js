'use strict';

const assert = require('assertthat');
const path = require('path');
const processenv = require('processenv');

const workers = require(path.resolve('./lib'));

describe('projects.update...', () => {
  it('... is of type function', (done) => {
    assert.that(workers.projects.update).is.ofType('function');
    done();
  });

  it('... rejects an error when function is called without a access token', (done) => {
    (async () => {
      try {
        await workers.projects.update();
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a valid API Token!');
        done();
      }
    })();
  });

  it('... rejects an error when function is called without a id for the project', (done) => {
    (async () => {
      try {
        await workers.projects.update('abcdef');
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a valid project id!');
        done();
      }
    })();
  });

  it('... rejects an error when the update object is not defined', (done) => {
    (async () => {
      try {
        await workers.projects.update('abcdef', '1234');
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a update object!');
        done();
      }
    })();
  });

  it('... must fetch the api error messages', (done) => {
    (async () => {
      try {
        await workers.projects.update('notfamoustoken', '1234', {});
      } catch (err) {
        assert.that(err).is.ofType('object');
        done();
      }
    })();
  });

  it('... must resolve the new project object when process is done', (done) => {
    (async () => {
      try {
        const add = await workers.projects.add(processenv('API_TOKEN'), 'viewproject');
        const change = await workers.projects.update(processenv('API_TOKEN'), add.project.id, { name: 'changedViewProject', description: 'A find description' });
        const res = await workers.projects.view(processenv('API_TOKEN'), add.project.id);

        assert.that(res.project.id).is.equalTo(add.project.id);
        assert.that(res.project.name).is.equalTo(change.project.name);
        assert.that(res.project.description).is.equalTo(change.project.description);
        assert.that(res.project.name).is.equalTo('changedViewProject');
        assert.that(res.project.description).is.equalTo('A find description');

        await workers.projects.delete(processenv('API_TOKEN'), add.project.id);
        done();
      } catch (err) {
        throw err;
      }
    })();
  });
});
