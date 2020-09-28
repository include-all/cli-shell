module.exports = async (str) => {
  const projectPath = process.cwd()
  console.log(str)
  console.log(`exec shell in ${projectPath}`)
}