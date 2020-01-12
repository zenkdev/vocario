/* eslint-disable no-useless-constructor */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */

function formatMessage(message?: any, loggerName?: string) {
  if (!loggerName) {
    return message;
  }

  if (!message) {
    return loggerName;
  }

  return `${loggerName}: ${message}`;
}

interface LoggerOptions {
  level?: number;
  metadata?: string;
}

class Logger {
  // eslint-disable-next-line no-empty-function
  constructor(private name: string | undefined, private options: LoggerOptions) {}

  public info(message?: any, ...optionalParams: any[]): void {
    console.info(formatMessage(message, this.name), ...optionalParams);
  }

  public error(message?: any, ...optionalParams: any[]): void {
    console.error(formatMessage(message, this.name), ...optionalParams);
  }
}

function createLogger(name?: string, options: LoggerOptions = {}) {
  return new Logger(name, options);
}

export default createLogger;
