const Discord = require('discord.js')
const client = new Discord.Client()

client.once('ready', () => {
    console.log('ready')
})

client.on('message', message =>{
    console.log(message.content)
})

client.login(process.env.token)