#!/usr/bin/env node

const program = require('commander');
const test = require("../shell/test")
const updateModule = require("../shell/update-module")


program
  .version('0.1.0')
  .option('-t, --test [test]', 'test')

program.command('test <str>').description("测试命令").action((str) => test(str))

program
  .command('update-module <moduleName>')
  .description("升级main模块")
  .action((moduleName) => updateModule(moduleName))


// 写这里help才有commands,要写在command后面
program.parse(process.argv)
if (!program.args.length) {
  program.help()
}
