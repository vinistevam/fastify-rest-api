const app = require('fastify')();
const autoLoad = require('fastify-autoload');
const path = require('path');
const sequelize = require('./config/sequelize');
const logger = require('./config/winston');

// This loads all plugins defined in /routes
app.register(autoLoad, {
  dir: path.join(__dirname, 'routes'),
  options: Object.assign({ prefix: '/api' }, {})
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

module.exports = app;
