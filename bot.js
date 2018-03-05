const Discord = require('discord.js');
const client = new Discord.Client();
const recentlyway = new Set();
const recentlyairhorn = new Set();
const recentlyugandasong = new Set();
const Canvas = require('canvas');
const fs = require('fs');
const path = require('path');
const snekfetch = require('snekfetch');

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') 
	{
      let start = new Date();
      message.channel.send("*Pinging...*")
        .then(m => {
          let end = new Date();
          m.edit(`Pong! :ping_pong:\nLatency by timestamp: **${m.createdTimestamp - message.createdTimestamp}ms**\nLatency by Date(): **${(end - start).toFixed(0)}ms**\nDiscord Latency: **${Math.round(client.ping)}ms**`);
        });
  	}
    if (message.content === '!gw2') 
	{
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
	if (message.content === '!way god')
	{
      recentlyway.delete(message.author.id);
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
	if (message.content === '!airhorn god')
	{
      recentlyairhorn.delete(message.author.id);
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
	if (message.content === '!ugandasong god')
	{
      recentlyugandasong.delete(message.author.id);
	}
    if(message.content === '!triggered')
	{
      message.channel.send('**AAAAAAAAAAAAAAAAAAAAAAAAA**');
      fs.readFile(__dirname + '/Images/Triggered.png', function(err, data) {
        if (err) throw err;
        const Image = Canvas.Image;
        const canvas = new Canvas(320, 371);
        const ctx = canvas.getContext('2d');
        const base = new Image();
        const avatar = new Image();
        base.src = data;
        snekfetch.get(message.author.avatarURL)
          .then(r => fs.writeFileSync('avatar.png', r.body));
        setTimeout(() => {
          fs.readFile('avatar.png', function(err, body) {
            if (err) throw err;
            avatar.src = body;
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, 320, 371);
            ctx.drawImage(avatar, 0, 0, 320, 320);
            const imgData = ctx.getImageData(0, 0, 320, 320);
            const data1 = imgData.data;
            for (let i = 0; i < data1.length; i += 4) {
              data1[i] = Math.max(255, data1[i]);
            }
            ctx.putImageData(imgData, 0, 0);
            ctx.drawImage(base, 0, 0);
            const buffer = canvas.toBuffer();
            const toSend = fs.writeFileSync('file.png', buffer);
            return message.channel.send('', {file: 'file.png'}).catch(err => message.channel.send(`${err.name}: ${err.message}`));
          });
        }, 1000); //1s
      });
    }
});
// GOD OF TRIGGERED
client.login(process.env.BOT_TOKEN);
