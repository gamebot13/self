function run ( message, txt ) {
  var e
  try { with ( Math ) e = eval ( txt )}
  catch { e = "Error" }
  message.channel.send ( "> " + e )
}

module.exports = run
module.exports.dependencies = [ "message", "txt" ]
