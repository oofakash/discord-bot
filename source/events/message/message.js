/* eslint-disable complexity */
/* eslint-disable consistent-return */
const Event = require('../../structures/event.js');

module.exports = class extends Event {

	async run(message) {
		const mentionRegex = RegExp(`^<@!?${this.client.user.id}>$`);
		const mentionRegexPrefix = RegExp(`^<@!?${this.client.user.id}> `);

		if (message.author.bot) return;

		if (message.content.match(mentionRegex)) message.channel.send(`My prefix for ${message.guild.name} is \`${this.client.prefix}\`.`);


		const prefix = message.content.match(mentionRegexPrefix) ?
			message.content.match(mentionRegexPrefix)[0] : this.client.prefix;
		if (!message.content.startsWith(prefix)) return;


		const [cmd, ...args] = message.content.slice(prefix.length).trim().split(/ +/g);

		const command = this.client.commands.get(cmd.toLowerCase()) || this.client.commands.get(this.client.aliases.get(cmd.toLowerCase()));
		if (command) {
			if (command.ownerOnly && !this.client.utils.checkOwner(message.author.id)) {
				message.channel.send('Bot owner only command.'); return;
			}

			if (command.guildOnly && !message.guild) {
				message.channel.send('This command cannot be executed in DMs'); return;
			}

			if (command.nsfw && !message.channel.nsfw) {
				message.channel.send('Command can be run in NSFW enabled channels.'); return;
			}

			if (command.args && !args.length) {
				message.channel.send(`You need to use the command as follows ${command.usage ? `${command.usage}` : 'No arguments for this command'}`);
			}


			if (message.guild) {
				const userPermCheck = command.userPerms ? this.client.defaultPerms.add(command.userPerms) : this.client.defaultPerms;
				// console.log(userPermCheck);
				if (userPermCheck) {
					const missing = message.channel.permissionsFor(message.member).missing(userPermCheck);
					if (missing.length) {
						message.channel.send(`**${this.client.utils.formatArray(missing.map(this.client.utils.formatPerms))}** required to run the command.`);
						return;
					}
				}
				const botPermCheck = command.botPerms ? this.client.defaultPerms.add(command.botPerms) : this.client.defaultPerms;
				if (botPermCheck) {
					const missing = message.channel.permissionsFor(message.member).missing(botPermCheck);
					if (missing.length) {
						return message.reply(`You need to give me \`${this.client.utils.formatArray(missing.map(this.client.utils.formatPerms))}\` permission`);
					}
				}
			}

			command.run(message, args);
		}
	}

};
