function run ( txt, config ) {
  global.color = txt == "std" ? config.color : txt
}

module.exports = run
module.exports.dependencies = [ "txt", "config" ]
