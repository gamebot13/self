const fs = require ( "fs" )
const { spawn } = require ( "child_process" )

const functions = require ( "../../functions.js" )

function run ( message, ds, name, txt ) {
  var code = ""
  var args = txt.split ( "\n" ) [ 0 ].split ( " " )
  var text = txt.split ( "\n" ).slice ( 1 )

  var is_code = false
  for ( var i = 0; i < text.length; i ++ ) {
    if ( ! is_code ) is_code = ( text [ i ] == "[code]" )
    else {
      is_code = ! ( text [ i ] == "[/code]" )
      if ( is_code && ! text [ i ].startsWith ( "```" ))
        code += text [ i ].split ( "\U200A" ).join ( "" ) + "\n"
    }
  }
  if ( ! code ) return
  if ( ! args [ 0 ] ) return
  args [ 0 ] = args [ 0 ].toLowerCase ( )
  var lang = require ( "./lang.json" )
  if ( ! lang [ args [ 0 ]]) return
  var ext = lang [ args [ 0 ]] [ 0 ]
  if ( ext == "hf" ) fs.copyFileSync ( process.env.HOME + "/hf/translator.py",
                                       process.env.HOME + "/self_env/translator.py" )
  fs.writeFileSync ( process.env.HOME + "/self_env/code." + ext, code )
  functions.log ( "[ " + name + " / do ] Started script in language " + args [ 0 ])

  const cmd = spawn ( "bash", [ "-c", "cd ~/self_env/ && " + lang [ args [ 0 ]] [ 1 ] + " "
                     + args.slice ( 1 ).join ( " " ) ])

  var stdout = "```"
  var stderr = "```"

  cmd.stdout.on ( "data", data => {
    stdout += "\n" + String ( data ).split ( "`" ).join ( "'" )
  })

  cmd.stderr.on ( "data", data => {
    stderr += "\n" + String ( data ).split ( "`" ).join ( "'" )
  })

  cmd.on ( "error", ( error ) => {
    stderr += "\n" + String ( error ).split ( "`" ).join ( "'" )
  })

  cmd.on ( "close", code => {
    stdout += " \n```"
    if ( stdout.length > 800 )
      stdout = stdout.slice ( 0, 390 ) + "[...]" + stdout.slice ( -390 )

    stderr += " \n```"
    if ( stderr.length > 800 )
      stderr = stderr.slice ( 0, 390 ) + "[...]" + stderr.slice ( -390 )

    const embed = new ds.MessageEmbed ( )
      .setColor ( functions.check_color ( color, message ))
      .addField ( "Выполненый код", stdout )
      .addField ( "\u200b", "\u200b" )
      .addField ( "Ошыбки", stderr )
    message.channel.send ( embed )

    functions.log ( "[ " + name + " / do ] Exited with status code " + code )
  })
}

module.exports = run
module.exports.dependencies = [ "message", "ds", "name", "txt" ]
