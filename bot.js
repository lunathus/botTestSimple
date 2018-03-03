const Discord = require('discord.js');
const client = new Discord.Client();
const recentlyway = new Set();
const recentlyairhorn = new Set();
const recentlyugandasong = new Set();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
      let start = new Date();
      message.channel.send("*Pinging...*")
        .then(m => {
           let end = new Date();
           m.edit(`Pong! :ping_pong:\nLatency by timestamp: **${m.createdTimestamp - message.createdTimestamp}ms**\nLatency by Date(): **${(end - start).toFixed(0)}ms**\nDiscord Latency: **${Math.round(client.ping)}ms**`);
        });
  	}
    if (message.content === '!gw2') {
    	message.channel.send('NOOOOOOOOOO!');
        message.channel.send('...');
        message.channel.send('Okay...');
  	}
    if (message.content === '!way')
    {
      if (recentlyway.has(message.author.id)) {
        message.channel.send('Spama não ' + message.author);
      }
        else {
          message.member.voiceChannel.join()
           .then(connection => 
              {message.reply('YOU DO NOT KNOW THE WAY!');
               const dispatcher = connection.playFile('./Audio/way.mp3');
               dispatcher.on("end", end => {
               message.member.voiceChannel.leave();
               });
              })
           .catch(err => message.reply(err));
        
          recentlyway.add(message.author.id);
          setTimeout(() => {
            recentlyway.delete(message.author.id);
          }, 30000); //30s
        }
    }
    if (message.content === '!airhorn')
    {
      if (recentlyairhorn.has(message.author.id)) {
        message.channel.send("Spama não " + message.author);
      }
        else {
          message.member.voiceChannel.join()
           .then(connection => 
              {message.reply('AIR HORN BLAST');
               const dispatcher = connection.playFile('./Audio/airhorn.mp3');
               dispatcher.on("end", end => {
               message.member.voiceChannel.leave();
               });
             })
           .catch(err => message.reply(err));
        
          recentlyairhorn.add(message.author.id);
          setTimeout(() => {
            recentlyairhorn.delete(message.author.id);
          }, 30000); //30s
        }
    }
    if (message.content === '!ugandasong')
    {
      if (recentlyugandasong.has(message.author.id)) {
        message.channel.send("Spama não " + message.author);
      }
        else {
          message.member.voiceChannel.join()
           .then(connection => 
              {message.reply('I lost my way... <:Cry:417707658456596480>');
               const dispatcher = connection.playFile('./Audio/lostmyway.mp3');
               dispatcher.on("end", end => {
               message.member.voiceChannel.leave();
               });
              })
           .catch(err => message.reply(err));
        
          recentlyugandasong.add(message.author.id);
          setTimeout(() => {
            recentlyugandasong.delete(message.author.id);
          }, 600000); //10min
        }
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
