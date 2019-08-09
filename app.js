const app = require('fastify')();
const autoLoad = require('fastify-autoload');
const path = require('path');
const sequelize = require('./config/sequelize');
const logger = require('./config/winston');

// FIXME Register route from file
// app.register(require('./routes/healthcheck'));
// This loads all plugins defined in /routes
app.register(autoLoad, {
  dir: path.join(__dirname, 'routes'),
  options: Object.assign({ prefix: '/api' }, {}),
});

app.get('/', (req, reply) => {
  reply.send({ hello: 'world' });
});

// Testing sequelize
sequelize
  .authenticate()
  .then(() => {
    logger.info('Connection has been established successfully');
  })
  .catch(logger.error('Unable to connect to the database'));

// Run the server
app.listen(3000, (err, address) => {
  if (err) {
    logger.error(err);
    process.exit(1);
  }
  logger.info(`server listening on ${address}`);
});


module.exports = app;
