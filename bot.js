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
   message.channel.send('QUASE LA');
      message.member.voiceChannel.join()
      .then(connection => 
            {message.reply('PORRA!');
             const dispatcher = connection.playFile('./Audio/way.mp3');
             dispatcher.on("end", end => {
             message.member.voiceChannel.leave();
       });
            })
      .catch(err => message.reply(err));
       message.channel.send('Okay...4');
  }
    if (message.content === '!ch')
    {
      if (message.member.voiceChannel) {
      message.channel.send('voicechannel');
    } else {
      message.channel.send('You need to join a voice channel first!');
    }
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
