const functions = require ( "../../functions.js" )

const neko_client = require ( "nekos.life" )
const neko = new neko_client ( )

function run ( message, ds ) {
  neko.sfw.baka ( )
    .then ( ( json ) => {
      var member = message.guild ? message.guild.member ( message.author ) : undefined
      var author = ( member && member.nickname ) ? member.nickname : message.author.username
      var mentioned
      if ( message.mentions.users.first ( )) {
        member = message.guild ? message.guild.member ( message.mentions.users.first ( )) :  undefined
        mentioned = " calls " + (( member && member.nickname ) ? member.nickname : message.mentions.users.first ( ).username + " an idiot" )
      } else mentioned = " shouts 'BAKA!'"
      var e = new ds.MessageEmbed ( )
        .setColor ( functions.check_color ( color, message ))
        .setImage ( json.url )
        .setFooter ( author + mentioned )
      message.channel.send ( e )
    })
}

module.exports = run
module.exports.dependencies = [ "message", "ds" ]
