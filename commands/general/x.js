const functions = require ( "../../functions.js" )

function run ( message, bot ) {
  message.channel.send ( "Poweroff" )
  .then ( ( ) => functions.destroy ( bot ))
}

module.exports = run
module.exports.dependencies = [ "message", "bot" ]
