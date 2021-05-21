const functions = require ( "../../functions.js" )

function run ( message, ds, color, txt ) {
  message.delete ( )
  var e = new ds.MessageEmbed ( )
    .setColor ( functions.check_color ( color, message ))
    .setDescription ( txt )
  message.channel.send ( e )
}

module.exports = run
module.exports.dependencies = [ "message", "ds", "color", "txt" ]
