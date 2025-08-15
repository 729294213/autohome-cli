import { program } from 'commander'
import { Command } from 'commander/typings/esm'
import {spawn} from 'child_process'

export function serve(program: Command){
    return program.createCommand('serve').description('服务').action(()=>{
        // console.log('serve')
        const child = spawn('npm', ['run', 'dev'], {
            stdio: 'inherit',
            shell: true
        })
        child.on('close', (code) => {
            console.log(`子进程退出，退出码 ${code}`);
            process.exit(code)
        });
    })
}
