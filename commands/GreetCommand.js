class GreetCommand {
  constructor(program) {
    this.program = program;
  }

  register() {
    this.program
      .command("greet <name>")
      .description("Greet User")
      .action((name) => this.execute(name));
  }

  execute(name) {
    console.log(`Hello ${name}`);
  }
}

module.exports = GreetCommand;
