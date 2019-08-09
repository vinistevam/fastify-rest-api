const app = require('./app');
const logger = require('./config/winston');

// Run the server
app.listen(3000, (err, address) => {
  if (err) {
    logger.error(err);
    process.exit(1);
  }
  logger.info(`server listening on ${address}`);
});
