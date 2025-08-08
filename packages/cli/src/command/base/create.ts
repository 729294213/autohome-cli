import { Command, program } from 'commander/typings/esm'
import { loadTemplate } from '../../utils/loadTemplate'

export function create(program: Command){
    return program.createCommand('create').description('创建').action(()=>{
        loadTemplate('create')
    })
}
