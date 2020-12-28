const Porkchop = require('./structures/porckhop');
const config = require('../config/config.json');

const client = new Porkchop(config);
client.start();
