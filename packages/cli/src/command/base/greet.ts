import prompts from 'prompts'
import { logger2 } from '../../utils/logger'
import { Command, program } from 'commander'

export function greet(program: Command){
    // logger2.log('greet',args);
    return program.createCommand('greet').description('这是一个对话方法').action(async ()=>{
        const response = await prompts({
            type: 'text',
            name: 'name',
            message: '请输入您的姓名:',
        })
        const response2 = await prompts({
            type: 'text',
            name: 'age',
            message: '请输入您的年龄:',
        })

        logger2.log('您的姓名是:', response.name);
        logger2.log('您的年龄是:', response2.age);
    })

}
