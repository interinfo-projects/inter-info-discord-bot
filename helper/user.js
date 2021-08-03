const { client } = require('discord.js');

/**
 * Helper to get all the datas faster
 */
class User {
	/**
	 * Get the current user
	 * @param {Object} client
	 * @param {Object} msg
	 * @return {user}
	 */
	static async constructor(client, msg) {
		await this.user(client, msg);
	}

	/**
	 * Get the current user
	 * @param {Object} client
	 * @param {Object} msg
	 * @returns {Promise<void>}
	 */
	static async user(client, msg) {
		await client.users.cache.get(msg.author.id);
	}

	/**
	 * Get a list of all users
	 * @param {Object} client
	 * @param {Object} msg
	 * @returns {Promise<void>}
	 */
	static async all(client, msg) {
		await client.guilds.cache.get(msg.guild.id).members.cache.forEach(member => console.log(member.user.username));
	}

}