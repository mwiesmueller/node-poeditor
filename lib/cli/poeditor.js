'use strict';

const path = require('path');
const poconnect = require(path.resolve('./lib'));
const writeResult = require('./writeResult');

let context;
let method;
let id;
let token;
let name;
let description;
let file;


process.argv.forEach((val) => {
  if (val.substring(0, 2) === '--') {
    const arg = val.slice(2).split('=');

    switch (arg[0]) {
      case 'context':
        context = arg[1];
      break;

      case 'method':
        method = arg[1];
      break;

      case 'token':
        token = arg[1];
      break;

      case 'name':
        name = arg[1];
      break;

      case 'id':
        id = arg[1];
      break;

      case 'description':
        description = arg[1];
      break;

      case 'file':
        file = arg[1];
      break;

      default:
    }
  }
});

if (!context) {
  console.log('** Error: You must define a context');
  process.exit();
}

if (!method || !token) {
  console.log('** Error: You must define a method and a API Token');
  process.exit();
}

let notfound;

if (context === 'projects') {
  notfound = true;

  switch (method) {
    case 'add':

    break;

    case 'delete':

    break;

    case 'export':

    break;

    case 'list':
      (async () => {
        try {
          const res = await poconnect.projects.list(token);

          console.log('** Receive follow result: ', res);

          if (file) {
            await writeResult(path.resolve(file), res);
          }

          console.log('** Process is done')
        } catch (err) {
          console.log('** ' + err);
        };
      })();
    break;

    case 'sync':

    break;

    case 'update':

    break;

    case 'view':
      (async () => {
        try {
          const res = await poconnect.projects.view(token, id);

          console.log('** Receive follow result: ', res);

          if (file) {
            await writeResult(path.resolve(file), res);
          }

          console.log('** Process is done')
        } catch (err) {
          console.log('** ' + err);
        };
      })();
    break;

    default:
      console.log('** Error: The named method is not famous. Please check your command');
      process.exit();
  }
}

if (!notfound) {
  console.log('** Error: Context not avaiabled. Please check your arguments in your call!');
}
