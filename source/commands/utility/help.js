const { MessageEmbed } = require('discord.js');
const Command = require('../../structures/command');
const { cmdcategory } = require('../../../config/cache.json');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Displays all the commands in the bot',
			category: cmdcategory.utility,
			usage: '[command]'
		});
	}

	async run(message, [command]) {
		const embed = new MessageEmbed()
			.setAuthor(`Commands available`)
			.setColor('YELLOW');


		if (command) {
			const cmd = this.client.commands.get(command) || this.client.commands.get(this.client.aliases.get(command));

			if (!cmd) return message.channel.send(`\`${command}\`command does not exist. Use \`${this.client.prefix}help\` to see the list!`);

			embed.setAuthor(`Detailed view of ${this.client.utils.capitalise(cmd.name)} command`);
			embed.addField(`Summary`, `\`${cmd.description}\``);
			embed.addField(`Usage`, `\`${cmd.usage}\``);
			embed.addField(`Aliases`, `\`${cmd.aliases.length ? cmd.aliases.map(alias => `${alias}`).join(', ') : 'No Aliases'}\``);
			embed.addField(`Category`, `\`${cmd.category}\``);

			return message.channel.send(embed);
		} else {
			let categories;
			if (!this.client.owners.includes(message.author.id)) {
				categories = this.client.utils.removeDuplicates(this.client.commands.filter(cmd => cmd.category !== 'Owner').map(cmd => cmd.category));
			} else {
				categories = this.client.utils.removeDuplicates(this.client.commands.map(cmd => cmd.category));
			}

			for (const category of categories) {
				embed.addField(`${this.client.utils.capitalise(category)}`, this.client.commands.filter(cmd =>
					cmd.category === category).map(cmd => `\`${cmd.name}\``).join(', '));
			}
			embed.addField(`Note`, `You can either mention me or use \`${this.client.prefix}\` as the prefix!`);
			return message.channel.send(embed);
		}
	}

};
