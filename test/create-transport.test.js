import winston from "winston";
import TransportStream from "winston-transport";

test("logging with shortcut function", () => {

  class MyTransport extends TransportStream{
    constructor(option){
      super(option);
    }

    log(info,next){
      console.log(`${new Date()} : ${info.level} : ${info.message}`);
      next();
    }
  }

  const logger = winston.createLogger({
    level : "silly",
    transports: [
      new MyTransport({})
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