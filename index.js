const app = require('./app');
const logger = require('./config/winston');

require('dotenv').config();

// Run the server
app.listen(process.env.PORT, (err, address) => {
  if (err) {
    logger.error(err);
    process.exit(1);
  }
  logger.info(`server listening on ${address}`);
});
