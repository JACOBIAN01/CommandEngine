#!/usr/bin/env node
const Engine = require("./engine/cli_engine.js")
const GreetCommand = require("./commands/GreetCommand.js")
const engine = new Engine()

engine.registerCommands([GreetCommand])
engine.run()