const app = require('fastify')();
const autoLoad = require('fastify-autoload');
const path = require('path');

// This loads all plugins defined in /routes
app.register(autoLoad, {
  dir: path.join(__dirname, 'routes'),
  options: Object.assign({ prefix: '/api' }, {})
});

app.get('/', (req, reply) => {
  reply.send({ hello: 'world' });
});

module.exports = app;
