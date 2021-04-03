module.exports = { 
    name: "ping",
    description: "Ping pong!",
    run: async(bot, message, args) => {

        // @Zeekz, pong!
        // message.reply('pong!')
        
        // pong!
        message.channel.send('pong!')
    }
}
