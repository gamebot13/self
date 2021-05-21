const functions = require ( "../../functions.js" )

function run ( bot, txt ) {
  bot.users.fetch ( txt )
    .then ( ch => ch.send ( "." )
    .then ( msg => {
      msg.delete ( )
      functions.log ( "Subscribed to " + ch.tag )
    }))
}

module.exports = run
module.exports.dependencies = [ "bot", "txt" ]
