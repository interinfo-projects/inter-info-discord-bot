const { Client, MessageEmbed, Permissions } = require("discord.js");
const configFile = require("./config.json");
const { prefix, token } = configFile;
//TODO: check if the prefix is still interesting

const client = new Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.content === 'ping') {
		msg.reply('pong');
	}
});

client.login('token');