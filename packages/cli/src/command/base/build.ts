import { Command, program } from 'commander/typings/esm'

export function build(program: Command){
    return program.createCommand('build').description('构建').action(()=>{

        console.log('build')
    })
}
