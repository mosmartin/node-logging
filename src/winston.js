const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'api-service' },
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({
      filename: './logs/error.log',
      level: 'error'
    }),
    new winston.transports.File({ filename: './logs/combined.log' })
  ]
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple()
    })
  );
}

//
// Logging
//
// logger.log({
//   level: 'info',
//   message: 'Hello distributed log files!'
// });

logger.error('Error Log');
logger.warn('Warning Log');
logger.info('Info Log');
logger.verbose('Verbose Log');
logger.debug('Debug Log');
logger.silly('Silly Log');
