const mongoose = require('mongoose')

const appointment = new mongoose.Schema({
	name: String,
	email: String,
	description: String,
	cpf: String,
	date: Date,
	time: String,
	finished: {
		type: Boolean,
		default: false
	},
	notified: {
		type: Boolean,
		default: false
	}
})

module.exports = appointment