const app = require('fastify')();
const logger = require('./config/winston');

app.register(require('./routes/healthcheck'));

app.listen(3000, (err, address) => {
  if (err) {
    logger.error(err);
    process.exit(1);
  }
  logger.info(`server listening on ${address}`);
});


module.exports = app;
