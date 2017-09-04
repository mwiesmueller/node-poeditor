'use strict';

const assert = require('assertthat');
const path = require('path');
const processenv = require('processenv');

const workers = require(path.resolve('./lib'));

describe('terms.update...', () => {
  it('... is of type function', (done) => {
    assert.that(workers.terms.update).is.ofType('function');
    done();
  });

  it('... rejects an error when function is called without a access token', (done) => {
    (async () => {
      try {
        await workers.terms.update();
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a valid API Token!');
        done();
      }
    })();
  });

  it('... rejects an error when function is called without a id for the project', (done) => {
    (async () => {
      try {
        await workers.terms.update('abcdef');
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a valid project id!');
        done();
      }
    })();
  });

  it('... rejects an error when function is called without data to add', (done) => {
    (async () => {
      try {
        await workers.terms.update('abcdef', '1234');
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a valid data object');
        done();
      }
    })();
  });

  it('... rejects an error when function is called data are not of type object', (done) => {
    (async () => {
      try {
        await workers.terms.update('abcdef', '1234', 'string');
      } catch (err) {
        assert.that(err).is.equalTo('Error: You must define a valid data object');
        done();
      }
    })();
  });

  it('... must fetch the api error messages', (done) => {
    (async () => {
      try {
        await workers.terms.update('notfamoustoken', '1234', []);
      } catch (err) {
        assert.that(err).is.ofType('object');
        done();
      }
    })();
  });

  it('... must resolve all languages from the project when process is done', (done) => {
    (async () => {
      try {
        const add = await workers.projects.add(processenv('API_TOKEN'), 'updateTerms');

        /* eslint-disable quote-props */
        /* eslint-disable quotes */
        const data = [
            {
                "term": "Add new list",
                "context": "",
                "reference": "\/projects",
                "plural": "",
                "comment": ""
            },
            {
                "term": "one project found",
                "context": "",
                "reference": "\/projects",
                "plural": "%d projects found",
                "comment": "Make sure you translate the plural forms",
                "tags": [
                    "first_tag",
                    "second_tag"
                ]
            },
            {
                "term": "Show all projects",
                "context": "",
                "reference": "\/projects",
                "plural": "",
                "tags": "just_a_tag"
            }
        ];

        /* eslint-enable quote-props */
        /* eslint-enable quotes */

        const res = await workers.terms.update(processenv('API_TOKEN'), add.project.id, data);

        assert.that(res.terms).is.not.undefined();
        await workers.projects.delete(processenv('API_TOKEN'), add.project.id);
        done();
      } catch (err) {
        throw err;
      }
    })();
  });
});
