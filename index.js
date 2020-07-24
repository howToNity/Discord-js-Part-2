const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('ready', ()=>{
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (msg)=>{
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;

    const arg = msg.content.slice(prefix.length).split(/ +/);
    const command = arg.shift().toLowerCase();

    if(command === 'ping'){
        msg.reply('pong');
    } else if(command === 'newvid'){
        msg.channel.send('https://www.youtube.com/watch?v=ce_NF-sYQng')
    }
})

client.login('token');