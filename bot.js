const Discord = require('discord.js');
const client = new Discord.Client();
var isReady = true;

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
  if (isReady && message.content === '!way')
  {
  isReady = false;
  const channel = message.member.voiceChannel;

    channel.join().then(connection =>
  {
      message.channel.send('Okay...1');
     const dispatcher = connection.playFile('./Audio/way.mp3');
     dispatcher.on("end", end => {
       channel.leave();
       });
   }).catch(err => console.log(err));
   isReady = true;
   message.channel.send('Okay...2');
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
