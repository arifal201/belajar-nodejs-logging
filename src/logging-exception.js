import winston from "winston";

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({}),
    new winston.transports.File({
      handleExceptions: true,
      filename: "app-exception.log"
    })
  ]
});

hello();