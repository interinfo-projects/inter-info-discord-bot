const { Client, MessageEmbed, Permissions } = require("discord.js");
const { prefix, token } = require("./config.json");
//TODO: check if the prefix is still interesting

const client = new Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
	if (msg.content === 'ping') {
		await msg.reply('pong');
	}
});

await client.login('token');