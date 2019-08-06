const fastify = require('fastify')({
  logger: true,
});

fastify.register(require('./routes/healthcheck'));

fastify.listen(3000, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});


module.exports = fastify;
