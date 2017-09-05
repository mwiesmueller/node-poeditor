'use strict';

const path = require('path');
const poconnect = require(path.resolve('./lib'));
const writeResult = require('./writeResult');
const readFile = require('./readFile');

const args = require('./argparser')();

let final;

if (args.context === 'projects') {
  switch (args.method) {
    case 'add':
      (async () => {
        try {
          const res = await poconnect.projects.add(args.token, args.name, args.description);

          console.log('** Receive follow result: ', res);

          if (args.outFile) {
            await writeResult(path.resolve(args.outFile), res);
          }

          console.log('** Process is done');
        } catch (err) {
          console.log('** ' + JSON.stringify(err));
        };
      })();

      final = true;
    break;

    case 'delete':
      (async () => {
        try {
          const res = await poconnect.projects.delete(args.token, args.projectid);

          console.log('** Receive follow result: ', res);

          if (args.outFile) {
            await writeResult(path.resolve(args.outFile), res);
          }

          console.log('** Process is done');
        } catch (err) {
          console.log('** ' + JSON.stringify(err));
        };
      })();

      final = true;
    break;

    case 'list':
      (async () => {
        try {
          const res = await poconnect.projects.list(args.token);

          console.log('** Receive follow result: ', res);

          if (args.outFile) {
            await writeResult(path.resolve(args.outFile), res);
          }

          console.log('** Process is done');
        } catch (err) {
          console.log('** ' + JSON.stringify(err));
        };
      })();

      final = true;
    break;

    case 'sync':
      (async () => {
        try {
          let data = args.data;

          if (args.dataFile) {
            data = await readFile(args.dataFile)
          }

          const res = await poconnect.projects.sync(args.token, args.projectid, data);

          console.log('** Receive follow result: ', res);

          if (args.outFile) {
            await writeResult(path.resolve(args.outFile), res);
          }

          console.log('** Process is done');
        } catch (err) {
          console.log('** ' + JSON.stringify(err));
        };
      })();

      final = true;
    break;

    case 'update':
      (async () => {
        try {
          const res = await poconnect.projects.update(args.token, args.projectid, { name: args.name, description: args.description, reference_language: args.lang });

          console.log('** Receive follow result: ', res);

          if (args.outFile) {
            await writeResult(path.resolve(args.outFile), res);
          }

          console.log('** Process is done');
        } catch (err) {
          console.log('** ' + JSON.stringify(err));
        };
      })();

      final = true;
    break;

    case 'view':
      (async () => {
        try {
          const res = await poconnect.projects.view(args.token, args.projectid);

          console.log('** Receive follow result: ', res);

          if (args.outFile) {
            await writeResult(path.resolve(args.outFile), res);
          }

          console.log('** Process is done');
        } catch (err) {
          console.log('** ' + JSON.stringify(err));
        };
      })();

      final = true;
    break;

    default:
      console.log('** Error: The named method is not famous. Please check your command');
      process.exit();
  }
}


if (args.context === 'languages') {
  switch (args.method) {
    case 'available':
      (async () => {
        try {
          const res = await poconnect.languages.available(args.token);

          console.log('** Receive follow result: ', res);

          if (args.outFile) {
            await writeResult(path.resolve(args.outFile), res);
          }

          console.log('** Process is done');
        } catch (err) {
          console.log('** ' + JSON.stringify(err));
        };
      })();

      final = true;
    break;

    case 'list':
      (async () => {
        try {
          const res = await poconnect.languages.list(args.token, args.projectid);

          console.log('** Receive follow result: ', res);

          if (args.outFile) {
            await writeResult(path.resolve(args.outFile), res);
          }

          console.log('** Process is done');
        } catch (err) {
          console.log('** ' + JSON.stringify(err));
        };
      })();

      final = true;
    break;

    case 'add':
      (async () => {
        try {
          const res = await poconnect.languages.add(args.token, args.projectid, args.lang);

          console.log('** Receive follow result: ', res);

          if (args.outFile) {
            await writeResult(path.resolve(args.outFile), res);
          }

          console.log('** Process is done');
        } catch (err) {
          console.log('** ' + JSON.stringify(err));
        };
      })();

      final = true;
    break;

    case 'delete':
      (async () => {
        try {
          const res = await poconnect.languages.delete(args.token, args.projectid, args.lang);

          console.log('** Receive follow result: ', res);

          if (args.outFile) {
            await writeResult(path.resolve(args.outFile), res);
          }

          console.log('** Process is done');
        } catch (err) {
          console.log('** ' + JSON.stringify(err));
        };
      })();

      final = true;
    break;

    default:
      console.log('** Error: The named method is not famous. Please check your command');
      process.exit();
  }
}

if (args.context === 'terms') {
  switch (args.method) {
    case 'list':
      (async () => {
        try {
          const res = await poconnect.terms.list(args.token, args.projectid);

          console.log('** Receive follow result: ', res);

          if (args.outFile) {
            await writeResult(path.resolve(args.outFile), res);
          }

          console.log('** Process is done');
        } catch (err) {
          console.log('** ' + JSON.stringify(err));
        };
      })();

      final = true;
    break;

    case 'add':
      (async () => {
        try {
          let data = args.data;

          if (args.dataFile) {
            data = await readFile(args.dataFile)
            data = JSON.parse(data);
          }

          const res = await poconnect.terms.add(args.token, args.projectid, data);

          console.log('** Receive follow result: ', res);

          if (args.outFile) {
            await writeResult(path.resolve(args.outFile), res);
          }

          console.log('** Process is done');
        } catch (err) {
          console.log('** ' + JSON.stringify(err));
        };
      })();

      final = true;
    break;

    case 'update':
      (async () => {
        try {
          let data = args.data;

          if (args.dataFile) {
            data = await readFile(args.dataFile)
            data = JSON.parse(data);
          }

          const res = await poconnect.terms.update(args.token, args.projectid, data);

          console.log('** Receive follow result: ', res);

          if (args.outFile) {
            await writeResult(path.resolve(args.outFile), res);
          }

          console.log('** Process is done');
        } catch (err) {
          console.log('** ' + JSON.stringify(err));
        };
      })();

      final = true;
    break;

    case 'delete':
      (async () => {
        try {
          let data = args.data;

          if (args.dataFile) {
            data = await readFile(args.dataFile)
            data = JSON.parse(data);
          }

          const res = await poconnect.terms.delete(args.token, args.projectid, data);

          console.log('** Receive follow result: ', res);

          if (args.outFile) {
            await writeResult(path.resolve(args.outFile), res);
          }

          console.log('** Process is done');
        } catch (err) {
          console.log('** ' + JSON.stringify(err));
        };
      })();

      final = true;
    break;

    default:
      console.log('** Error: The named method is not famous. Please check your command');
      process.exit();
  }
}

if (args.context === 'contributors') {
  switch (args.method) {
    case 'list':
      (async () => {
        try {
          const res = await poconnect.contributors.list(args.token, args.projectid, args.lang);

          console.log('** Receive follow result: ', res);

          if (args.outFile) {
            await writeResult(path.resolve(args.outFile), res);
          }

          console.log('** Process is done');
        } catch (err) {
          console.log('** ' + JSON.stringify(err));
        };
      })();

      final = true;
    break;

    case 'add':
      (async () => {
        try {
          const res = await poconnect.contributors.add(args.token, args.projectid, { name: args.name, language: args.lang, admin: args.admin, email: args.email });

          console.log('** Receive follow result: ', res);

          if (args.outFile) {
            await writeResult(path.resolve(args.outFile), res);
          }

          console.log('** Process is done');
        } catch (err) {
          console.log('** ' + JSON.stringify(err));
        };
      })();

      final = true;
    break;

    case 'remove':
      (async () => {
        try {
          const res = await poconnect.contributors.remove(args.token, args.projectid, { language: args.lang,  email: args.email });

          console.log('** Receive follow result: ', res);

          if (args.outFile) {
            await writeResult(path.resolve(args.outFile), res);
          }

          console.log('** Process is done');
        } catch (err) {
          console.log('** ' + JSON.stringify(err));
        };
      })();

      final = true;
    break;

    default:
      console.log('** Error: The named method is not famous. Please check your command');
      process.exit();
  }
}

if (!final) {
  console.log('** Error: The named context is not famous. Please check your command');
  process.exit();
}
