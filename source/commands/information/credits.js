const Command = require('../../structures/command');
const { MessageEmbed } = require('discord.js');
const { cmdcategory, aboutBot } = require('../../../config/cache.json');


module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['thanks'],
			description: 'Get to know more about the Bot Creators & maintainers!',
			category: cmdcategory.info
		});
	}

	async run(message) {
		const creditEmbed = new MessageEmbed()
			.setAuthor(`porkchop`)
			.setDescription(aboutBot)
			.addFields(
				{ name: '`Bot Developer`', value: `**Akash#3554**` }
			);
		message.channel.send(creditEmbed);
	}

};
