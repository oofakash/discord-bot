const Event = require('../structures/event');
const database = require('../database/database');

module.exports = class extends Event {

	constructor(...args) {
		super(...args, {
			once: true
		});
	}

	async run() {
		console.log(`Up and running as ${this.client.user.tag} \n${this.client.commands.size} commands and ${this.client.events.size} events currently loaded.`);
		await database();

		console.log('Connected to PorkchopDB.');
	}

};
