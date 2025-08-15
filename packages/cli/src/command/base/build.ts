import { Command, program } from 'commander/typings/esm'
import {spawn} from 'child_process'

export function build(program: Command){
    return program.createCommand('build').description('构建').action(()=>{
        const child = spawn('npm',['run','build'],{
            stdio: 'inherit',
            shell: true
        })
        child.on('close', (code) => {
            console.log(`子进程退出，退出码 ${code}`);
            process.exit(code)
        });
        console.log('build')
    })
}
