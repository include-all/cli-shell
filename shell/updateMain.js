const execa = require('execa'),
  path = require('path');


module.exports = async () => {
  const projectPath = process.cwd()

  console.log(`exec shell in ${projectPath}`)

  // 更新代码  git pull
  console.log(`===========begin git pull=============`)
  const gitPull = execa.commandSync('git pull', {
    cwd: projectPath
  });
  console.log(gitPull.stdout)
  console.log(`===========git pull end=============`)

  // 安装依赖 npm install
  console.log(`===========begin npm install=============`)
  const installMain = execa.commandSync('npm install', {
    cwd: projectPath
  })
  console.log(installMain.stdout)
  console.log(`===========npm install end=============`)


  // 打包 npm run build
  console.log(`===========begin npm build=============`)
  const buildMain = execa.commandSync('npm run build', {
    cwd: projectPath
  })
  console.log(buildMain.stdout)
  console.log(`===========npm build end=============`)


  // 移动dist文件
  console.log(`===========begin move dist=============`)
  const cpMainDist = execa.commandSync('cp -r ./dist /home/www/qiankun/subapp/app-vue2', {
    cwd: projectPath
  })
  console.log(cpMainDist.stdout)
  console.log(`===========move dist end=============`)
}

