import { program,Command} from 'commander'

type FN = (p:Command) => Command

export function registerCommand(fn:FN){
    program.addCommand(fn(program))
}
