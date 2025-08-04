import { logger,logger2 } from '../../utils/logger'
import pc from 'picocolors'
import pkg from '../../../package.json'
import { program } from 'commander'
import type { Command } from 'commander'
export function info(program: Command){
    // console.log('info',args);
    //打印日志
    return program.createCommand('info').description('这是脚手架信息').action(()=>{
        logger.info("Using logger 3.0.0");
        logger.start("Building project...");
        logger.warn("A new version of logger is available: 3.0.1");
        logger2.success("Project built!");
        // logger.error(new Error("This is an example error. Everything is fine!"));
        logger2.box("I am a simple box");
        //打印当前目录
        // console.log('当前目录',process.cwd())

        logger.log(pc.bgGreen(`Product: miaoma CLI v${pkg.version}`))
        logger.log(pc.green('Author: Heyi'))
        logger.log(pc.underline('Website: https://www.miaomaedu.com'))
    }
    )
}
