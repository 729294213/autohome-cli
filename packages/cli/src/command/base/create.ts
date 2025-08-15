import { Command, program } from 'commander/typings/esm'
import { loadTemplate } from '../../utils/loadTemplate'
import { logger2 } from '../../utils/logger'
import prompts from 'prompts'
export function create(program: Command){
    return program
        .createCommand('create')
        .description('创建')
        .argument('<name>', '项目名称')
        .option('-t,--template <template>', '模版名称')
        .option('-v,--vue <vue>', 'vue版本')
        .option('-f,--force', '强制创建')
        .action(async (name, options)=>{
            let { template } = options
            if (!template) {
                let chatres = await prompts(
                    {
                        type: 'select',
                        name: 'template',
                        message: '请选择模版',
                        choices: [
                            {
                                title: 'vue-ts',
                                value: 'vue-ts'
                            },
                            {
                                title: 'react-ts',
                                value: 'react-ts'
                            }
                        ]
                    }
                )
                template = chatres.template
            }
            // logger2.info(name,pet)
            logger2.info(JSON.stringify(options))
            logger2.info(`创建项目${name}，模版${template}`)
            loadTemplate({
                name,
                template,
                loocal: false
            })
        })
}
