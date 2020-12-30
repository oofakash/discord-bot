const mongoose = require('mongoose');

const { porkchopdb } = require('../../config/config.json');
module.exports = async () => {
	await mongoose.connect(porkchopdb, {
		keepAlive: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	});
	return mongoose;
};
