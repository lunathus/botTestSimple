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
  const channel = message.member.voiceChannel;
      message.channel.send('Okay...1');
    channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
   message.channel.send('Okay...4');
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
