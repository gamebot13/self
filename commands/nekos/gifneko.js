const functions = require ( "../../functions.js" )

const neko_client = require ( "nekos.life" )
const neko = new neko_client ( )

function run ( message, ds ) {
  neko.sfw.nekoGif ( )
    .then ( ( json ) => {
      var member = message.guild ? message.guild.member ( message.author ) : undefined
      var author = ( member && member.nickname ) ? member.nickname : message.author.username
      var e = new ds.MessageEmbed ( )
        .setColor ( functions.check_color ( color, message ))
        .setImage ( json.url )
        .setFooter ( author + " requests a moving pic of a cat girl" )
      message.channel.send ( e )
    })
}

module.exports = run
module.exports.dependencies = [ "message", "ds" ]
