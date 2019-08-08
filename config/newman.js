const newman = require('newman'); // require('newman')

// call newman.run to pass `options` object and wait for callback
newman.run({
  collection: require('../postman/collections/boilerplateRestAPI.json'), // FIXME - add from URL
  environment: require('../postman/environment/local.json'), // FIXME - add from URL
  reporters: 'cli',
}, (err) => {
  if (err) { throw err; }
  console.info('collection run complete!');
});
