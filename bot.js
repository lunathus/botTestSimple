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
      }, 30000); //30s
    }
    if (message.content === '!airhorn')
    {
      if (talkedRecently.has(message.author.id))
        return;

      message.member.voiceChannel.join()
       .then(connection => 
          {message.reply('AIR HORN BLAST');
           const dispatcher = connection.playFile('./Audio/airhorn.mp3');
           dispatcher.on("end", end => {
           message.member.voiceChannel.leave();
           });
          })
       .catch(err => message.reply(err));
      
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 30000); //30s
    }
    if (message.content === '!ugandasong')
    {
      if (talkedRecently.has(message.author.id))
        return;

      message.member.voiceChannel.join()
       .then(connection => 
          {message.reply('I lost my way... :Cry:');
           const dispatcher = connection.playFile('./Audio/lostmyway.mp3');
           dispatcher.on("end", end => {
           message.member.voiceChannel.leave();
           });
          })
       .catch(err => message.reply(err));
      
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 600000); //10min
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
