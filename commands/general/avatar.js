const functions = require ( "../../functions.js" )

function run ( message, ds, color ) {
  message.mentions.users.forEach ( men => {
    var t = men.createdAt
    var months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                   "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
    var time_str = ( t.getDate < 10 ? "0" : "" ) + t.getDate ( ) + " " +
                    months [ t.getMonth ( )] + " " + t.getFullYear ( )
    var e = new ds.MessageEmbed ( )
      .setColor ( functions.check_color ( color, message ))
      .setImage ( men.displayAvatarURL ( { size: 2048 }))
    message.channel.send ( e )
  })
}

module.exports = run
module.exports.dependencies = [ "message", "ds", "color" ]
