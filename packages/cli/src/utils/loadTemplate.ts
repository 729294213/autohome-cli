import { readFile, copy } from 'fs-extra'
import {join} from 'node:path'
// readFile(join(import.meta.dirname,'/logger.ts')).then((data)=>{
//     console.log(data.toString())
// })
export async function loadTemplate(name: string) {
    const template = await readFile(join(__dirname, `../package.json`))
    
    // 复制整个模板目录到目标位置
    await copy(
        join(__dirname, `../templates/template-vue`), 
        join(__dirname, `../../output/${name}`)  // 假设你想输出到一个新的目录
    )
    
    return template.toString()
}
