import winston from "winston";

test("create log file", () => {
  const logger = winston.createLogger({
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "app.log"
      })
    ]
  });

  logger.error({message: "hello logging"})
  logger.warn({message: "hello logging"})
  logger.info({message: "hello logging"})
});
