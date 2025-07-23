
import { program} from 'commander'
import { build } from './command/base/build'
import { create } from './command/base/create'
import { serve } from './command/base/serve'
import { greet } from './command/base/greet'
import { info } from './command/base/info'

program.version('1.0.0').name('autohome-cli')
//初始化项目
program.command('init')
    .description('初始化项目')
    .action(build)
//创建项目
program.command('create')
    .description('创建项目')
    .action(create)
//启动项目
program.command('serve')
    .description('启动项目')
    .action(serve)
//打招呼
program.command('greet')
    .description('打招呼')
    .action(greet)
//项目信息
program.command('info')
    .description('项目信息')
    .action(info)
// program.
export const run = (args: string[]) => {
    // console.log('Hello World! -----11122')
    // const [, , ...command] = args;
    // console.log(command);
    // switch (command[0]) {
    //     case 'init':
    //         init();
    //         break;
    //     case 'create':
    //         create();
    //         break;
    //     default:
    //         break;
    // }
    program.parse(args)
}
