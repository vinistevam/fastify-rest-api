const newman = require('newman');
const fs = require('fs');
const appRoot = require('app-root-path');

const collections = fs.readFileSync(`${appRoot}/postman/collections/boilerplateRestAPI.json`);
const env = fs.readFileSync(`${appRoot}/postman/environment/local.json`);

const options = {
  collection: JSON.parse(collections), // FIXME - add from Postman URL
  environment: JSON.parse(env), // FIXME - add from Postman URL
  reporters: 'cli'
};

newman.run(options, err => {
  if (err) {
    throw new Error(`Config newman: ${err.message}`);
  }
});
