import winston from "winston";

test("create new logger", () => {
  const logger = winston.createLogger({
    level : "silly",
    transports: [
      new winston.transports.Console({})
    ]
  });

  logger.log({level: "error",message: "hello error"})
  logger.log({level: "warn",message: "hello warn"})
  logger.log({level: "info",message: "hello info"})
  logger.log({level: "http",message: "hello http"})
  logger.log({level: "verbose",message: "hello verbose"})
  logger.log({level: "debug",message: "hello debug"})
  logger.log({level: "silly",message: "hello silly"})
});

test("logging with shortcut function", () => {
  const logger = winston.createLogger({
    level : "silly",
    transports: [
      new winston.transports.Console({})
    ]
  });

  logger.error({message: "hello error"})
  logger.warn({message: "hello warn"})
  logger.info({message: "hello info"})
  logger.http({message: "hello http"})
  logger.verbose({message: "hello verbose"})
  logger.debug({message: "hello debug"})
  logger.silly({message: "hello silly"})
});