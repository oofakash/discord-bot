const Command = require('../../structures/command');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const { cmdcategory } = require('../../../config/cache.json');


module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['user', 'whois'],
			description: 'Get to know more about the Bot Creators & maintainers!',
			category: cmdcategory.info
		});
	}

	async run(message, [target]) {
		const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;

		const embed = new MessageEmbed()
			.setColor(member.displayHexColor)
			.setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
			.addField('Username', `\`${member.user.username}\``)
			.addField('UserID', `\`${member.id}\``)
			.addField('Account Created', `\`${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}\``)
			.addField('Server Join Date', `\`${moment(member.joinedAt).format('LL LTS')}\``);
		return message.channel.send(embed);
	}

};
