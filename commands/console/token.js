const ini = require ( "iniparser" )
const config = ini.parseSync ( "./config.ini" )
const functions = require ( "../../functions.js" )
const Discord = require ( "discord.js-selfbot" )
let token = config [ "user" ] [ "token" ]

function run ( message, ds, bot, auth ) {
    let embed = new Discord.MessageEmbed ( )
    .setTitle("TOKEN")
    .setColor ( functions.check_color ( color, message ))
    .addField ( "Token:", `${token}`, true )


message.channel.send ( embed )
}

module.exports = run
module.exports.dependencies = [ "message", "ds", "bot", "auth" ]