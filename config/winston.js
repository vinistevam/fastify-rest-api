const winston = require('winston');

// Define the custom settings for each transport (file, console)
const options = {
  file: {
    level: 'info',
    filename: './logs/logs.log',
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'info',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

// Define a custom format of the log messages
const logFormat = winston.format.combine(
  winston.format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
  winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`),
);

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({ format: logFormat, options: options.console }),
    // new winston.transports.File(options.file), // FIXME
  ],
});

module.exports = logger;
