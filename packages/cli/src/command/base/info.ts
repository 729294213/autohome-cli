import { logger,logger2 } from '../../utils/logger'
export function info(...args: string[]){
    // console.log('info',args);
    //打印日志
    logger.info("Using logger 3.0.0");
    logger.start("Building project...");
    logger.warn("A new version of logger is available: 3.0.1");
    logger2.success("Project built!");
    // logger.error(new Error("This is an example error. Everything is fine!"));
    logger2.box("I am a simple box");
    //打印当前目录
    // console.log('当前目录',process.cwd())
}
