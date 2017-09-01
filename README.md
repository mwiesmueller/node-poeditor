# poedit-connector

This module is designed to connect the api from the [POEditor Service](https://poeditor.com). You can use the module in your own code as well with the CLI.

## Getting Started

### Install the module via npm

```
npm i --save --save-exact poedit-connector
```

### Requirements

You must have at least Node v8 installed since this module works with async await.


### Use module in your project

To use this module in your project it's necessary to require the module:

```
const poconnect = require('poedit-connector');
```

## Use API Calls:

### Projects

#### list

##### ([Click hier to see the api docs](https://poeditor.com/docs/api#projects_list))

```
const poconnect = require('poedit-connector');
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

#### add

##### ([Click hier to see the api docs](https://poeditor.com/docs/api#projects_add))

```
const poconnect = require('poedit-connector');
const name = 'MyProjectName';
const description = 'Some description to the project';
const token = 'abcdef';

(async () => {
  try {
    const res = await poconnect.projects.add(token, name, description);

    // res => { projects: [] };
  } catch (err) {
    // err => returns an error when failed
  }
})();
```

This function will get all projects by your access token from the api and check if the project name alredy exist. Is it true, the function rejects an error.

## License

The MIT License (MIT)
Copyright (c) 2017 Martin Wiesmüller - WERBAS AG / Werbas Innotec GmbH.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
