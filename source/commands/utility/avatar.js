const Command = require('../../structures/command');
const { cmdcategory } = require('../../../config/cache.json');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['pong'],
			description: 'A basic ping command',
			category: cmdcategory.utility
		});
	}

	async run(message) {
		const msg = await message.channel.send('Hang on for a second!');

		const latency = msg.createdTimestamp - message.createdTimestamp;

		msg.edit(`Bot Latency: \`${latency}ms\`, API Latency: \`${Math.round(this.client.ws.ping)}ms\``);
	}

};
