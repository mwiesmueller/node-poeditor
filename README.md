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

#### list

##### ([Click hier to see the api docs](https://poeditor.com/docs/api#projects_list))

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

#### view

##### ([Click hier to see the api docs](https://poeditor.com/docs/api#projects_view))

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

#### add

##### ([Click hier to see the api docs](https://poeditor.com/docs/api#projects_add))

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

#### update

##### ([Click hier to see the api docs](https://poeditor.com/docs/api#projects_update))

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

#### delete

##### ([Click hier to see the api docs](https://poeditor.com/docs/api#projects_delete))

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

#### sync

##### ([Click hier to see the api docs](https://poeditor.com/docs/api#projects_sync))

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

#### export

##### ([Click hier to see the api docs](https://poeditor.com/docs/api#projects_export))

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

#### available

##### ([Click hier to see the api docs](https://poeditor.com/docs/api#languages_available))

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

#### list

##### ([Click hier to see the api docs](https://poeditor.com/docs/api#languages_list))

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

#### add

##### ([Click hier to see the api docs](https://poeditor.com/docs/api#languages_add))

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

## License

The MIT License (MIT)
Copyright (c) 2017 Martin Wiesmüller - WERBAS AG / Werbas Innotec GmbH.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
