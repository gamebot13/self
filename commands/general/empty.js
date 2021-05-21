function run ( message, ds ) {
  message.delete ( )
  var e = new ds.MessageEmbed ( )
    .setDescription ( "E" )
  message.channel.send ( e ).then ( msg => msg.suppressEmbeds ( true ))
}

module.exports = run
module.exports.dependencies = [ "message", "ds" ]
