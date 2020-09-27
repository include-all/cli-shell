#!/usr/bin/env node

const program = require('commander');
const test = require("../shell/test")
const updateMain = require("../shell/updateMain")
const updateAppVue2 = require("../shell/updateAppVue2")


program
  .version('0.1.0')
  .option('-t, --test [test]', 'test')

program.command('test').description("测试命令").action(test)

program.command('updateMain').description("升级main模块").action(updateMain)
program.command('updateAppVue2').description("升级main模块").action(updateAppVue2)


// 写这里help才有commands,要写在command后面
program.parse(process.argv)
if (!program.args.length) {
  program.help()
}
