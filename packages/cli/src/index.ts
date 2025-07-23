// type Person = {
//     name: string;
//     age: number;
// }
// const person: Person = {
//     name: 'zhapsndiaw',
//     age: 30
// }
// console.log('Hello World! -----11122'+person.naeme)
// ;
import { run } from './cli'

export const runCli = () => {
    console.log('Hello World! -----11122')
    run(process.argv)
}
