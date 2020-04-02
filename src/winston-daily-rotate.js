const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');
const { combine, timestamp, label, prettyPrint } = format;

const transport = new transports.DailyRotateFile({
  filename: 'application-%DATE%.log',
  dirname: './logs',
  // frequency: '1m',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
  auditFile: 'log-audit.json'
});

transport.on('rotate', function(oldFilename, newFilename) {
  // do something fun
});

const logger = createLogger({
  level: 'verbose',
  format: combine(label({ label: 'log' }), timestamp(), prettyPrint()),
  defaultMeta: { service: 'api-service' },
  transports: [transport]
});

logger.error('Error Log');
logger.warn('Warning Log');
logger.info('Info Log');
logger.verbose('Verbose Log');
logger.debug('Debug Log');
logger.silly('Silly Log');
