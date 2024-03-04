const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login('paste-your-bot-token-here');


const express = require("express")
const app = express()

app.get("/" , (req, res) =>{
  res.send("Your request has been accepted")
})

app.listen(3000, () =>{
  console.log("Project is ready!")
 })



client.on('message', message => {
	if (message.content === '!ping')
     {
		message.channel.send('pong');
	}
});

client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('!kick')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick('Optional reason that will display in the audit logs')
            .then(() => {
              message.reply(`Successfully kicked ${user.tag}`);
            })
            .catch(err => {
              message.reply('I was unable to kick the member');
              console.error(err);
            });
        } 
        else {
          message.reply("That user isn't in this guild!");
        }
      } 
      else {
        message.reply("You didn't mention the user to kick!");
      }
    }
  });

client.on("message", message => {
  if(message.content === "!clearchat") {
    message.channel.bulkDelete(100)
    .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
    .catch(console.error);
  }
})


  client.on('ready', () => {
    client.user.setActivity('Discord JS', { type: 'PLAYING' })
  })

client.on('message', message => {
  if (message.content === '!latency') {  
    message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
});


client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('!ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) 
      {
        member.ban('Optional reason that will display in the audit logs')
          .then(() => {
            message.reply(`Successfully baned ${user.tag}`);
          })
          .catch(err => {
            message.reply('I was unable to ban the member');
         
            console.error(err);
          });
      } 
      else {
        message.reply("That user isn't in this guild!");
      }
    } 
    else {
      message.reply("You didn't mention the user to ban!");
    }
  }
});

