const execa = require('execa'),
  path = require('path');


module.exports = async (moduleName) => {
  if (!['main', 'appVue2', 'appReact'].includes(moduleName)) {
    console.log('模块名必须为[main][appVue2][appReact]三者中的一个')
    console.log('请重新输入指令，eg: cli-shell update-module main')
    return;
  }

  const targetPathMap = {
    main: '/home/www/qiankun/main',
    appVue2: '/home/www/qiankun/subapp/app-vue2',
    appReact: '/home/www/qiankun/subapp/app-react'
  }

  const projectPathMap = {
    main: '/home/git-repositories/fe-qiankun-demo/main',
    appVue2: '/home/git-repositories/fe-qiankun-demo/app-vue2',
    appReact: '/home/git-repositories/fe-qiankun-demo/app-react'
  }

  const targetPath = targetPathMap[moduleName]

  const projectPath = projectPathMap[moduleName]

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


  // 删除dist
  console.log('===========begin delete old source===============')
  execa.commandSync(`rm -rf ${targetPath}/*`, {
    cwd: projectPath
  })
  console.log('===========delete old source end===============')


  // 刷新dist
  console.log('===========ls old source end===============')
  const lsMainDist = execa.commandSync('ls ./dist', {
    cwd: projectPath
  })
  console.log(lsMainDist.stdout)
  console.log('===========ls old source end===============')


  // 移动dist文件
  console.log(`===========begin move dist=============`)
  const cpMainDist = execa.commandSync(`cp -rf . ${targetPath}`, {
    cwd: path.join(projectPath, './dist')
  })
  console.log(cpMainDist.stdout)
  console.log(`===========move dist end=============`)
}

