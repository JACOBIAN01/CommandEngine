const {Command} = require("commander")

class Engine{
    constructor(){
        this.program = new Command();
    }

    registerCommands(command){
        command.forEach((commandClass)=>{
            const CommandInstance = new commandClass(this.program);
            CommandInstance.register();
        })
    }

    run(){
        this.program.parse();
    }
}

module.exports = Engine;