import { program } from 'commander'
import { Command } from 'commander/typings/esm'

export function serve(program: Command){
    return program.createCommand('serve').description('服务').action(()=>{
        console.log('serve')
    })
}
