const Discord = require('discord.js');
const client = new Discord.Client();

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
      message.author.setTimeout(,60000);
      message.member.voiceChannel.join()
       .then(connection => 
          {message.reply('YOU DO NOT KNOW THE WAY!');
           const dispatcher = connection.playFile('./Audio/way.mp3');
           dispatcher.on("end", end => {
           message.member.voiceChannel.leave();
           });
          })
       .catch(err => message.reply(err));
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
