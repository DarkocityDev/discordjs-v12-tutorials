const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');

const { prefix, token } = require('./config.json')

bot.commands = new Discord.Collection();

const commandFile = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFile) {
    const command = require(`./commands/${file}`)
    bot.commands.set(command.name, command)
}

bot.on('ready', () => {
    console.log(`${bot.user.tag} is now logged in and online!`)
});

bot.on('message', (message) => {

    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length === '0') return;

    let command = bot.commands.get(cmd);
    if (!command) return;
    if (command) command.run(bot, message, args);

})

bot.login(token);
