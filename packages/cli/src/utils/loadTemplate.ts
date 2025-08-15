import { readFile, copy } from 'fs-extra'
import {join} from 'node:path'
import { downloadTemplate } from 'giget'

interface loadLocalTemplateOptions {
    name: string;
    template: string;
    loocal: boolean;
}
async function loadLocalTemplate(options: Omit<loadLocalTemplateOptions, 'loocal'>) {
    // const res = await downloadTemplate(`https://codeload.github.com/design-sparx/antd-multipurpose-dashboard/tar.gz/refs/heads/main`, {
    //     dir: `${process.cwd()}/.temp`
    // })
    // console.log(res)
    // 复制整个模板目录到目标位置
    await copy(
        join(__dirname, `../templates/template-${options.template}`),
        `${process.cwd()}/${options.name}`  // 假设你想输出到一个新的目录
    )

    // return template.toString()
}
async function loadRemoteTemplate(options: Omit<loadLocalTemplateOptions, 'loocal'>) {
    await downloadTemplate('https://codeload.github.com/design-sparx/antd-multipurpose-dashboard/tar.gz/refs/heads/main', {
        dir: `${process.cwd()}/${options.name}`
    })
    // await copy(dir, `${process.cwd()}/${options.name}`)
}
export async function loadTemplate(options: loadLocalTemplateOptions) {
    const {loocal, ...restParams} = options
    if(loocal){
        await loadLocalTemplate(restParams)
    }else {
        await loadRemoteTemplate(restParams)
    }
    // await remove(`${process.cwd()}/.temp`)
}
