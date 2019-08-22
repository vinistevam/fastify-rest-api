const newman = require('newman');
const fs = require('fs');
const appRoot = require('app-root-path');

const env = fs.readFileSync(`${appRoot}/postman/environment/local.json`);

fs.readdir(`${appRoot}/postman/collections`, async function(err, files) {
  if (err) {
    throw new Error(`Error while reading collections folder: ${err}`);
  }

  files.forEach(function(file) {
    const options = {
      collection: require(`${appRoot}/postman/collections/${file}`), // FIXME - add from Postman URL
      environment: JSON.parse(env), // FIXME - add from Postman URL
      reporters: 'cli'
    };

    newman.run(options, err => {
      if (err) {
        throw new Error(`Config newman: ${err.message}`);
      }
    }); //end of newman run
  }); //end of for loop for files
}); //end of reading files from collections folder
