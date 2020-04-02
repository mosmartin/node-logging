const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;

const logger = createLogger({
  level: 'debug',
  format: combine(label({ label: 'right meow!' }), timestamp(), prettyPrint()),
  transports: [
    new transports.Console(),
    new transports.File({ filename: './logs/combined.log' })
  ]
});

// logger.log({
//   level: 'error',
//   message: 'Error Log'
// });

// logger.log({
//   level: 'warn',
//   message: 'Warning log'
// });

// logger.log({
//   level: 'info',
//   message: 'info log'
// });

// logger.log({
//   level: 'verbose',
//   message: 'verbose log'
// });

// logger.log({
//   level: 'debug',
//   message: 'debug log'
// });

// logger.log({
//   level: 'silly',
//   message: 'silly log'
// });

logger.error('Error Log');
logger.warn('Warning Log');
logger.info('Info Log');
logger.verbose('Verbose Log');
logger.debug('Debug Log');
logger.silly('Silly Log');
