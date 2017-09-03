'use strict';

const assert = require('assertthat');
const path = require('path');
/* eslint-disable no-unused-vars */
const processenv = require('processenv');
/* eslint-enabled no-unused-vars */

const workers = require(path.resolve('./lib'));

describe('projects.sync...', () => {
  it('... is of type function', (done) => {
    assert.that(workers.projects.sync).is.ofType('function');
    done();
  });

  it('... rejects an error when function is called without a access token', (done) => {
    (async () => {
      try {
        await workers.projects.sync();
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a valid API Token!');
        done();
      }
    })();
  });

  it('... rejects an error when function is called without a id for the project', (done) => {
    (async () => {
      try {
        await workers.projects.sync('abcdef');
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a valid project id!');
        done();
      }
    })();
  });

  it('... rejects an error when the sync object is not defined', (done) => {
    (async () => {
      try {
        await workers.projects.sync('abcdef', '1234');
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a valid sync object!');
        done();
      }
    })();
  });

  it('... rejects an error when the sync object is not ofType object', (done) => {
    (async () => {
      try {
        await workers.projects.sync('abcdef', '1234', 'string');
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a valid sync object!');
        done();
      }
    })();
  });

  it('... must fetch the api error messages', (done) => {
    (async () => {
      try {
        await workers.projects.sync('notfamoustoken', '1234', [{}]);
      } catch (err) {
        assert.that(err).is.ofType('object');
        done();
      }
    })();
  });

  // POEditor API response an error because error in permissions.
  // --
  // it('... must resolve a terms object when process is done', (done) => {
  //   (async () => {
  //     try {
  //       const add = await workers.projects.add(processenv('API_TOKEN'), 'TestTermProject');
  //       const terms = [
  //         { term: 'I am a test term',
  //           context: 'TestContext',
  //           reference: 'Tests',
  //           plural: 'I am some test terms',
  //           comment: 'Some comment'
  //         },
  //         { term: 'Today is a nice day',
  //           context: 'Outside of the office',
  //           reference: 'Have Fun',
  //           plural: 'I have nice days whole the year :-)',
  //           comment: 'A comment again'
  //         }
  //       ];
  //       const sync = await workers.projects.sync(processenv('API_TOKEN'), add.project.id, terms);
  //
  //       assert.that(sync.terms).is.not.undefined();
  //
  //       // await workers.projects.delete(processenv('API_TOKEN'), add.project.id);
  //       done();
  //     } catch (err) {
  //       console.log(err)
  //       throw err;
  //     }
  //   })();
  // });
});
