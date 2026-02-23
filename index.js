#!/usr/bin/env node
const Engine = require("./engine/cli_engine.js")
const GreetCommand = require("./commands/GreetCommand.js")
const {Add} = require("./commands/Calculate.js")
const {Sub} = require("./commands/Calculate.js")
const GitHubCommand = require("./commands/githubCommand.js")
const engine = new Engine()


engine.registerCommands([GreetCommand,Add,Sub,GitHubCommand])
engine.run()
