//bot login 

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login('paste-your-bot-token-here');


//your bot will be online by the above code
//bot login ============================================================================================

//now we need to make the bot online for 24/7

const express = require("express")
const app = express()

app.get("/" , (req, res) =>{
  res.send("Your request has been accepted")
})

app.listen(3000, () =>{
  console.log("Project is ready!")
 })

 //by this above code a link will appear eg:"bot.user.repl.co"
 //u have to create monitor as (http) in {https://uptimerobot.com/} (free) and your bot will be online for 24/7

//bot online 24/7============================================================================================

//now simple function make your bot to reply to messages

client.on('message', message => {
	if (message.content === '!ping') //type the response for your bot
     {
		message.channel.send('pong'); //output by bot
	}
});

//by this above code your bot will respond to your msg
//for eg: User- !ping  Bot- pong
//you can create several commands by using the code again

//simple msg================================================================================================

//now lets create !kick function

client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // If the message content starts with "!kick"
    if (message.content.startsWith('!kick')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member
            .kick('Optional reason that will display in the audit logs')
            .then(() => {
              // We let the message author know we were able to kick the person
              message.reply(`Successfully kicked ${user.tag}`);
            })
            .catch(err => {
              // An error happened
              // This is generally due to the bot not being able to kick the member,
              // either due to missing permissions or role hierarchy
              message.reply('I was unable to kick the member');
              // Log the error
              console.error(err);
            });
        } else {
          // The mentioned user isn't in this guild
          message.reply("That user isn't in this guild!");
        }
        // Otherwise, if no user was mentioned
      } else {
        message.reply("You didn't mention the user to kick!");
      }
    }
  });

  // by the above code your bot will be able to kick a user by !kick {Note: Your Bot Must Have Permissions Enabled}
//bot-kick-function=========================================================================================

//now lets make your bot be able to clear the chat

client.on("message", message => {
  if(message.content === "!clearchat") {
    message.channel.bulkDelete(100)
    .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
    .catch(console.error);
  }
})

  //by this above your bot can now clear chat 
  //bot-clear-chat-function ==================================================================================

  client.on('ready', () => {
    client.user.setActivity('Discord JS', { type: 'PLAYING' })
  })

//set activity >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//check latency of the bot 

client.on('message', message => {
  if (message.content === '!latency') {  
    message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
});



//ban members>>>>>>>>>>>>>>>>>>>>>>>

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!ban"
  if (message.content.startsWith('!ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .ban('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`Successfully baned ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to ban the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("You didn't mention the user to ban!");
    }
  }
});

//ban funtion>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


  
//                                                Thank You
 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++