'use strict';

const assert = require('assertthat');
const path = require('path');
const processenv = require('processenv');

const workers = require(path.resolve('./lib'));

describe('contributors.add...', () => {
  it('... is of type function', (done) => {
    assert.that(workers.contributors.add).is.ofType('function');
    done();
  });

  it('... rejects an error when function is called without a access token', (done) => {
    (async () => {
      try {
        await workers.contributors.add();
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a valid API Token!');
        done();
      }
    })();
  });

  it('... rejects an error when function is called without a id for the project', (done) => {
    (async () => {
      try {
        await workers.contributors.add('abcdef');
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a valid project id!');
        done();
      }
    })();
  });

  it('... rejects an error when function is called without a valid object', (done) => {
    (async () => {
      try {
        await workers.contributors.add('abcdef', '12345');
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a valid object!');
        done();
      }
    })();
  });

  it('... must fetch the api error messages', (done) => {
    (async () => {
      try {
        await workers.contributors.add('notfamoustoken', '1234', { name: 'Caesar', email: processenv('TEST_EMAIL') });
      } catch (err) {
        assert.that(err).is.ofType('object');
        done();
      }
    })();
  });

  it('... must resolve true when contributor is added', (done) => {
    (async () => {
      try {
        const add = await workers.projects.add(processenv('API_TOKEN'), 'addContrib');
        const res = await workers.contributors.add(processenv('API_TOKEN'), add.project.id, { name: 'Caesar', email: 'm.wiesmueller@werbasinnotec.com', admin: '1' });

        assert.that(res).is.true();
        await workers.projects.delete(processenv('API_TOKEN'), add.project.id);
        done();
      } catch (err) {
        throw err;
      }
    })();
  });
});
