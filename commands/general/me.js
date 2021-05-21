const ms = require ( "pretty-ms" )
const config = require ( "../../config.json" )
const { version : ds_version } = require ( config.lib )

const functions = require ( "../../functions.js" )

function run ( message, ds, bot, args, auth ) {
  var e = new ds.MessageEmbed ( )
    .setColor ( functions.check_color ( color, message ))
    .setThumbnail ( `https://cdn.discordapp.com/app-assets/${auth.activity.appid}/${auth.assets.largeimage}.png` )
  var stats = { "Uptime" : `${ ms ( bot.uptime )}`,
                "Load" : `${( process.memoryUsage ( ).rss / 1024 / 1024).toFixed ( 2 )} MB RSS\n ${ ( process.memoryUsage ( ).heapUsed / 1024 / 1024 ).toFixed ( 2 )} MB Heap`,
                "Ping" : `${ bot.ws.ping } ms`,
                "Guilds" : `${ bot.guilds.cache.size }`,
                "DMs" : `${ bot.users.cache.size }`,
                "NodeJS" : `${ process.version } on ${ process.platform } ${ process.arch }`,
                "discord.js" : `${ ds_version }`,
                "Source" : "[GitHub](https://github.com/gXLg/self_)" }
  if ( args [ 0 ])
    args.forEach ( a => e.addField ( a, stats [ a ], true ))
  else
    for ( var s in stats )
      e.addField ( s, stats [ s ], true )
  message.channel.send ( e )
}

module.exports = run
module.exports.dependencies = [ "message", "ds", "bot", "args", "auth" ]
