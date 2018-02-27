const Discord = require('discord.js');
const client = new Discord.Client();
const talkedRecently = new Set();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
    	message.channel.send('Pong');
  	}
    if (message.content === '!gw2') {
    	message.channel.send('NOOOOOOOOOO!');
        message.channel.send('...');
        message.channel.send('Okay...');
  	}
    if (message.content === '!way')
    {
      if (talkedRecently.has(message.author.id))
        return;

      message.member.voiceChannel.join()
       .then(connection => 
          {message.reply('YOU DO NOT KNOW THE WAY!');
           const dispatcher = connection.playFile('./Audio/way.mp3');
           dispatcher.on("end", end => {
           message.member.voiceChannel.leave();
           });
          })
       .catch(err => message.reply(err));
      
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 30000);
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
