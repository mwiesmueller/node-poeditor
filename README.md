# node-poeditor

This module is designed to connect the api from the [POEditor Service](https://poeditor.com). You can use the module in your own code as well with the CLI.

## Getting Started

### Install the module via npm

```
npm i --save --save-exact node-poeditor
```

### Requirements

You must have at least Node v8 installed since this module works with async await.


### Use module in your project

To use this module in your project it's necessary to require the module:

```
const poconnect = require('node-poeditor');
```

## Use API Calls:

### Projects

#### &bull; list

##### => ([Click hier to see the api docs](https://poeditor.com/docs/api#projects_list))

```
const poconnect = require('node-poeditor');
const token = 'abcdef';

(async () => {
  try {
    const res = await poconnect.projects.list(token);

    // res => { projects: [] };
  } catch (err) {
    // err => returns an error when failed
  }
})();
```

This function will response all projects by your access token from the api and check if the project name alredy exist. Is it true, the function rejects an error.

#### &bull; view

##### => ([Click hier to see the api docs](https://poeditor.com/docs/api#projects_view))

```
const poconnect = require('node-poeditor');
const token = 'abcdef';
const id = 12345;  // <= The unique identifier of the project. It's possible to get over function `list`.

(async () => {
  try {
    const res = await poconnect.projects.view(token, id);

    // res => {  "project": {
            "id": 7717,
            "name": "Automobile",
            "description": "",
            "public": 0,
            "open": 0,
            "reference_language": "",
            "terms": 0,
            "created": "2014-08-13T09:39:32+0000"
        }
      };
  } catch (err) {
    // err => returns an error when failed
  }
})();
```

#### &bull; add

##### => ([Click hier to see the api docs](https://poeditor.com/docs/api#projects_add))

```
const poconnect = require('node-poeditor');
const name = 'MyProjectName';
const description = 'Some description to the project';
const token = 'abcdef';

(async () => {
  try {
    const res = await poconnect.projects.add(token, name, description);

    // res => {  "project": {
            "id": 7717,
            "name": "Automobile",
            "description": "",
            "public": 0,
            "open": 0,
            "reference_language": "",
            "terms": 0,
            "created": "2014-08-13T09:39:32+0000"
        }
      };
  } catch (err) {
    // err => returns an error when failed
  }
})();
```

#### &bull; update

##### => ([Click hier to see the api docs](https://poeditor.com/docs/api#projects_update))

```
const poconnect = require('node-poeditor');

const name = 'A new name for your project';
const description = 'A new description for your project';
const refLang = 'Set a new reference_language in your project';

const token = 'abcdef';
const id = 12345; // <= The unique identifier of your project.

(async () => {
  try {
    const res = await poconnect.projects.add(token, id, { name, description, refLang });

    // res => {  "project": {
            "id": 7717,
            "name": "Automobile",
            "description": "",
            "public": 0,
            "open": 0,
            "reference_language": "",
            "terms": 0,
            "created": "2014-08-13T09:39:32+0000"
        }
      };
  } catch (err) {
    // err => returns an error when failed
  }
})();
```

#### &bull; delete

##### => ([Click hier to see the api docs](https://poeditor.com/docs/api#projects_delete))

```
const poconnect = require('node-poeditor');
const token = 'abcdef';
const id = '1234';

(async () => {
  try {
    const res = await poconnect.projects.delete(token, id);

    // res => true;
  } catch (err) {
    // err => returns an error when failed
  }
})();
```

#### &bull; sync

##### => ([Click hier to see the api docs](https://poeditor.com/docs/api#projects_sync))

```
const poconnect = require('node-poeditor');
const token = 'abcdef';
const id = '1234';

const terms = [
 { term: 'I am a test term',
   context: 'TestContext',
   reference: 'Tests',
   plural: 'I am some test terms',
   comment: 'Some comment'
 },
 { term: 'Today is a nice day',
   context: 'Outside of the office',
   reference: 'Have Fun',
   plural: 'I have nice days whole the year :-)',
   comment: 'A comment again'
 }
];

(async () => {
  try {
    const res = await poconnect.projects.sync(token, id, terms);

    // res => "result": {
        "terms": {
            "parsed": 2,
            "added": 2,
            "updated": 0,
            "deleted": 2446
        }
    };
  } catch (err) {
    // err => returns an error when failed
  }
})();
```

With this method it's possible to sync your terms in your project.

#### &bull; export

##### => ([Click hier to see the api docs](https://poeditor.com/docs/api#projects_export))

```
const poconnect = require('node-poeditor');
const token = 'abcdef';
const id = '1234';
const obj = {
  language: 'de', // Define the language which you like to export
  type: 'json', // Define the export type. Please read the options in the API documentation
  tags: '["tag"]', //  Define your tags
  filters: '["filters"] // Define your filters'
};

(async () => {
  try {
    const res = await poconnect.projects.export(token, id, obj);

    // res => "result": {
        "url": "https:\/\/api.poeditor.com\/v2\/download\/file\/b577a66ac39d82995debfabc016f855d"
    };
  } catch (err) {
    // err => returns an error when failed
  }
})();
```

With this method it's possible to export your projects in your favorite language.


### Languages

#### &bull; available

##### => ([Click hier to see the api docs](https://poeditor.com/docs/api#languages_available))

```
const poconnect = require('node-poeditor');
const token = 'abcdef';

(async () => {
  try {
    const res = await poconnect.languages.available(token);

    // res => { "languages": [
            {
                "name": "Abkhazian",
                "code": "ab"
            },
            {
                "name": "Afar",
                "code": "aa"
            },
            {
                "name": "Afrikaans",
                "code": "af"
            },
            {
                "name": "Akan",
                "code": "ak"
            },
            {
                "name": "Albanian",
                "code": "sq"
            },
            {
                "name": "Amharic",
                "code": "am"
            },
            {
                "name": "Arabic",
                "code": "ar"
            },
            .
            .
            .
            .
            .
   };
  } catch (err) {
    // err => returns an error when failed
  }
})();
```

#### &bull; list

##### => ([Click hier to see the api docs](https://poeditor.com/docs/api#languages_list))

```
const poconnect = require('node-poeditor');
const token = 'abcdef';
const id = 1234;

(async () => {
  try {
    const res = await poconnect.languages.list(token, id);

    // res => { "languages": [
            {
                "name": "English",
                "code": "en",
                "translations": 13,
                "percentage": 12.5,
                "updated": "2015-05-04T14:21:41+0000"
            },
            {
                "name": "French",
                "code": "fr",
                "translations": 70,
                "percentage": 68.75,
                "updated": "2015-04-30T08:59:34+0000"
            }
        ]
   };
  } catch (err) {
    // err => returns an error when failed
  }
})();
```

#### &bull; add

##### => ([Click hier to see the api docs](https://poeditor.com/docs/api#languages_add))

```
const poconnect = require('node-poeditor');
const token = 'abcdef';
const id = 1234;
const lang = 'de'

(async () => {
  try {
    const res = await poconnect.languages.add(token, id, lang);

    // res => true;
  } catch (err) {
    // err => returns an error when failed
  }
})();
```

With this method it's possible to add a additional language to an exist project. You cann fetch the languagecodes over the method `list`

#### &bull; delete

##### => ([Click hier to see the api docs](https://poeditor.com/docs/api#languages_delete))

```
const poconnect = require('node-poeditor');
const token = 'abcdef';
const id = 1234;
const lang = 'de'

(async () => {
  try {
    const res = await poconnect.languages.delete(token, id, lang);

    // res => true;
  } catch (err) {
    // err => returns an error when failed
  }
})();
```

With this function it's possible to delete an language by project.

### Terms

#### &bull; list

##### => ([Click hier to see the api docs](https://poeditor.com/docs/api#terms_list))

```
const poconnect = require('node-poeditor');
const token = 'abcdef';
const id = 1234;

(async () => {
  try {
    const res = await poconnect.terms.list(token, id);

    // res => { "terms": [
            {
                "term": "app_name",
                "context": "",
                "plural": "",
                "created": "2013-06-10T11:08:54+0000",
                "updated": "",
                "translation": {
                    "content": "TODO List",
                    "fuzzy": 0,
                    "proofread": 1,
                    "updated": "2013-06-12T11:08:54+0000"
                },
                "reference": "",
                "tags": [
                    "first_upload",
                    "second_upload"
                ],
                "comment": "Don't translate the name of the app"
            },
            {
                "term": "mark_as_unread",
                "context": "",
                "plural": "",
                "created": "2013-06-10T11:08:54+0000",
                "updated": "",
                "translation": {
                    "content": "",
                    "fuzzy": 0,
                    "proofread": 0,
                    "updated": ""
                },
                "reference": "",
                "tags": [
                    "second_upload"
                ],
                "comment": ""
            },
            {
                "term": "One Item",
                "context": "",
                "plural": "%d Items",
                "created": "2013-06-10T11:24:12+0000",
                "updated": "",
                "translation": {
                    "content": {
                        "one": "",
                        "other": ""
                    },
                    "fuzzy": 0,
                    "proofread": 0,
                    "updated": ""
                },
                "reference": "",
                "tags": [],
                "comment": ""
            }
        ]
   };
  } catch (err) {
    // err => returns an error when failed
  }
})();
```

#### &bull; add

##### => ([Click hier to see the api docs](https://poeditor.com/docs/api#terms_add))

```
const poconnect = require('node-poeditor');
const token = 'abcdef';
const id = 1234;
const terms = [
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

(async () => {
  try {
    const res = await poconnect.terms.add(token, id, terms);

    // res => {
        "terms": {
            "parsed": 1,
            "added": 1
        };
  } catch (err) {
    // err => returns an error when failed
  }
})();

```

#### &bull; update

##### => ([Click hier to see the api docs](https://poeditor.com/docs/api#terms_update))

```
const poconnect = require('node-poeditor');
const token = 'abcdef';
const id = 1234;
const terms = [
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

(async () => {
  try {
    const res = await poconnect.terms.update(token, id, terms);

    // res => {
        "terms": {
            "parsed": 1,
            "updated": 1
        };
  } catch (err) {
    // err => returns an error when failed
  }
})();

```

#### &bull; delete

##### => ([Click hier to see the api docs](https://poeditor.com/docs/api#terms_delete))

```
const poconnect = require('node-poeditor');
const token = 'abcdef';
const id = 1234;
const terms = [
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

(async () => {
  try {
    const res = await poconnect.terms.delete(token, id, terms);

    // res => {
        "terms": {
            "parsed": 2,
            "deleted": 2
        };
  } catch (err) {
    // err => returns an error when failed
  }
})();

```

### Contributors

#### &bull; list

##### => ([Click hier to see the api docs](https://poeditor.com/docs/api#contributors_list))

```
const poconnect = require('node-poeditor');
const token = 'abcdef';
const id = 1234;

(async () => {
  try {
    const res = await poconnect.contributors.list(token, id);

    // res => { "contributors": [
            {
                "name": "final test",
                "email": "email@example.com",
                "permissions": [
                    {
                        "project": {
                            "id": "4886",
                            "name": "Twentytwelve"
                        },
                        "type": "administrator"
                    }
                ]
            }
        ]};
  } catch (err) {
    // err => returns an error when failed
  }
})();
```

#### &bull; add

##### => ([Click hier to see the api docs](https://poeditor.com/docs/api#contributors_add))

```
const poconnect = require('node-poeditor');
const token = 'abcdef';
const id = 1234;
cosnt obj = {
  name: 'Martin Wiesmüller',  // Required: Set the name of the contributor
  email: 'm.wiesmueller@werbasinnotec.com', // Required: Set the email of the contributor
  language: 'de', // Set the language for the contributor
  admin: '1' // Set it to `1` when you like that the contributor is an administrator
}

(async () => {
  try {
    const res = await poconnect.contributors.add(token, id);

    // res => { "contributors": [
            {
                "name": "final test",
                "email": "email@example.com",
                "permissions": [
                    {
                        "project": {
                            "id": "4886",
                            "name": "Twentytwelve"
                        },
                        "type": "administrator"
                    }
                ]
            }
        ]};
  } catch (err) {
    // err => returns an error when failed
  }
})();
```

## License

The MIT License (MIT)
Copyright (c) 2017 Martin Wiesmüller - WERBAS AG / Werbas Innotec GmbH.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
