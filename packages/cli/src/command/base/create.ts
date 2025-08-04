import { Command, program } from 'commander/typings/esm'

export function create(program: Command){
    return program.createCommand('create').description('创建').action(()=>{

        console.log('create')
    })
}
