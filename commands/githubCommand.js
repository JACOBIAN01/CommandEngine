const GithubService = require("../services/GithubServices")

class GitHubCommand{
    constructor(program){
        this.program= program;
    }

    register(){
        this.program
        .command("github <username>")
        .action((username)=>this.execute(username))
    }

    execute(username){
        GithubService(username)
    }

}

module.exports = GitHubCommand;


