import winston from "winston";

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({}),
    new winston.transports.File({
      handleExceptions: true,
      handleRejections: true,
      filename: "app-rejections.log"
    })
  ]
});

async function callAsync() {
  return Promise.reject("salah")
}

callAsync();