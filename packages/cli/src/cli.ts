
import { program} from 'commander'
import { build } from './command/base/build'
import { create } from './command/base/create'
import { serve } from './command/base/serve'
import { greet } from './command/base/greet'
import { info } from './command/base/info'
import {registerCommand} from './registerCommand'

program.version('1.0.0').name('autohome-cli')
//初始化项目
registerCommand(build)
registerCommand(create)
registerCommand(serve)
registerCommand(greet)
registerCommand(info)

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
