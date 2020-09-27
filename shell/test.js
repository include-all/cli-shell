const execa = require('execa'),
  path = require('path');


module.exports = async () => {
  const projectPath = process.cwd()
  console.log(`exec shell in ${projectPath}`)
}