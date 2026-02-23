class Add{
    constructor(program){
        this.program = program;
    }

    register(){
        this.program
        .command("add <n1> <n2>")
        .action((n1,n2)=>{this.execute(n1,n2)})
    }

    execute(n1,n2){
        console.log(Number(n1)+Number(n2))
    }
}

class Sub{
    constructor(program){
        this.program = program;
    }
    register(){
        this.program
        .command("sub <n1> <n2>")
        .action((n1,n2)=>{this.execute(n1,n2)})
    }

    execute(n1,n2){
        console.log(Number(n1)-Number(n2))
    }
}


module.exports = {Add,Sub};




