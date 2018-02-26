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
    if (message.content === '!way') {
      var voiceChannel = message.member.voiceChannel;
      voiceChannel.join().then(connection =>
      {
         const dispatcher = connection.playFile('./Audio/way.mp3');
         dispatcher.on("end", end => {
           voiceChannel.leave();
         });
       }).catch(err => console.log(err));
      }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
