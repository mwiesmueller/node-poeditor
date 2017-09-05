'use strict';

const path = require('path');
const poconnect = require(path.resolve('./lib'));
const writeResult = require('./writeResult');

const parseArgs = () => {
  const ArgumentParser = require('argparse').ArgumentParser;
  const parser = new ArgumentParser({
    version: '0.0.1',
    addHelp: true,
    description: 'Argparse example'
  });

  parser.addArgument(
    [ '-t', '--token' ],
    {
      help: 'Set the token to access the PO Editor API. You can define it in your account-settings of PO Editor',
      required: true
    }
  );

  parser.addArgument(
    [ '-c', '--context' ],
    {
      help: 'Set the context where you like to access. Available contexts are: contributors, languages, projects and terms',
      required: true
    }
  );

  parser.addArgument(
    [ '-m', '--method' ],
    {
      help: 'Set the method where you like to access by the defined context. See API Specs: https://github.com/mwiesmueller/node-poeditor',
      required: true
    }
  );

  parser.addArgument(
    [ '-id', '--projectid' ],
    {
      help: 'Define a projectid when its present in the context'
    }
  );

  parser.addArgument(
    [ '-d', '--description' ],
    {
      help: 'Set a description when its present in the context.'
    }
  );

  parser.addArgument(
    [ '-n', '--name' ],
    {
      help: 'Set a name when its present in the context.'
    }
  );

  parser.addArgument(
    [ '-o', '--object' ],
    {
      help: 'Set a object when its present in the context. Attention: Set the Object as String!'
    }
  );

  parser.addArgument(
    [ '-out', '--outFile' ],
    {
      help: 'Define the file and path where the result will be write'
    }
  );

  parser.addArgument(
    [ '-daf', '--dataFile' ],
    {
      help: 'Define a JSON Data file for data. This argument will disable the --data argument!'
    }
  );

  parser.addArgument(
    [ '-da', '--data' ],
    {
      help: 'Set a data object when its present in the object!'
    }
  );

  parser.addArgument(
    [ '-l', '--lang' ],
    {
      help: 'Set a languagecode when its present in the context'
    }
  );

  parser.addArgument(
    [ '-e', '--email' ],
    {
      help: 'Set a email address (Only for contributors method)'
    }
  );

  parser.addArgument(
    [ '-a', '--admin' ],
    {
      help: 'Set it "1" when you like to set a admin. (Only for contributors method)'
    }
  );

  return parser.parseArgs();
};

module.exports = parseArgs;
