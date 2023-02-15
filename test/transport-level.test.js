import winston from "winston";

test("create log file", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "app.log"
      }),
      new winston.transports.File({
        level: "error",
        filename: "app-error.log"
      })
    ]
  });

  logger.error({message: "hello logging"})
  logger.warn({message: "hello logging"})
  logger.info({message: "hello logging"})
});
