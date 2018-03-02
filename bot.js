const Discord = require('discord.js');
const client = new Discord.Client();
const recentlyway = new Set();
const recentlyairhorn = new Set();
const ugandasong = new Set();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
    	message.channel.send('Pong!');
        let start = now();
      msg.channel.sendMessage("*Pinging...*")
          .then(m => {
              let end = now();
              m.edit(`:ping_pong: Pong!\nLatency by timestamp: **${m.createdTimestamp - msg.createdTimestamp}ms**\nLatency by now(): **${(end - start).toFixed(0)}ms**\nDiscord Latency: **${Math.round(client.ping)}ms**`);
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
      if (recentlyway.has(message.author.id)) {
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
        
          recentlyway.add(message.author.id);
          setTimeout(() => {
            recentlyway.delete(message.author.id);
          }, 30000); //30s
        }
    }
    if (message.content === '!ugandasong')
    {
      if (recentlyway.has(message.author.id)) {
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
        
          recentlyway.add(message.author.id);
          setTimeout(() => {
            recentlyway.delete(message.author.id);
          }, 600000); //10min
        }
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
