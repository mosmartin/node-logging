const winston = require('winston');
require('winston-daily-rotate-file');

const transport = new winston.transports.DailyRotateFile({
  filename: './logs/application-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d'
});

transport.on('rotate', function(oldFilename, newFilename) {
  // do something fun
});

const logger = winston.createLogger({
  level: 'verbose', 
  transports: [transport]
});

logger.error('Error Log');
logger.warn('Warning Log');
logger.info('Info Log');
logger.verbose('Verbose Log');
logger.debug('Debug Log');
logger.silly('Silly Log');
