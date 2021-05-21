const functions = require ( "../../functions.js" )

function run ( message, ds, bot, auth, commands ) {
  var e = new ds.MessageEmbed ( )
    .setColor ( functions.check_color ( color, message ))
    .setThumbnail ( `https://cdn.discordapp.com/app-assets/${auth.activity.appid}/${auth.assets.largeimage}.png` )
  for ( var i in commands ) {
    var command = [ ]
    commands [ i ].forEach ( j => command.push ( j ))
    e.addField ( i, command.join ( ", " ) + "\u200b", true )
  }
  message.channel.send ( e )
}

module.exports = run
module.exports.dependencies = [ "message", "ds", "bot", "auth", "commands" ]
