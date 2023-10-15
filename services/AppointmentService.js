const appointment = require('../models/Appointment')
const AppointmentFactory = require('../factories/AppointmentFactory')
const mongoose = require('mongoose')
const mailer = require('nodemailer')
const colors = require('colors')

const Appointment = mongoose.model('Appointment', appointment)

const transporter = mailer.createTransport({
	host: '',
	port: 2525,
	auth: {
		user: '',
		pass: ''
	}
})

class AppointmentService {

	async Create(data){
		
		const { name, email, description, cpf, date, time } = data

		const appo = new Appointment({
			name, email, description, cpf, date, time
		})

		try {
			await appo.save()
			return true
		} catch (err) {
			console.error(err)
			return false
		}
	}

	async GetAll(finished){ // show all non-finished, if false

		if (finished) {
			return await Appointment.find()
		}
		
		let data = await Appointment.find({'finished': false})
		let appos = [];

		data.forEach((appointment) => {
			if (appointment.date != null) appos.push(AppointmentFactory.Build(appointment));
		})

		return appos
	}

	async GetById(id){

		try {
			let result = await Appointment.findOne({'_id': id})
			return result
		} catch(err){
			console.log(err)
			return false
		}
	}

	async Finish(id){

		try {
			await Appointment.findOneAndUpdate({'_id': id}, { 'finished': true })
			return true
		} catch(err){
			console.log(err)
			return false
		}
	}

	async Search(query){
		try {
			let result = await Appointment.find().or([{email: query}, {cpf: query}, {name: query}])
			return result
		} catch(err){
			console.log(err)
			return []
		}
	}

	async SendNotification(){

		let appos = await this.GetAll(false)

		appos.forEach(async (app) => {

			let date = app.start.getTime() // miliseconds
			let hour = 1000 * 60 * 60 // 3600ms - one hour *2
			let gap = date - Date.now()

			if (gap <= hour) {
				if (!app.notified) {
					
					await Appointment.findOneAndUpdate({ '_id': app.id }, { notified: true })

					console.log(colors.yellow('[NOTIFICATION] ') + colors.blue(app.email))

					transporter.sendMail({
						from: "Snarloff's Suporte",
						to: app.email,
						subject: 'A sua consulta está próxima!',
						text: 'Sua consulta será daqui 1 hora.'
					}).then(() => {

					}).catch((err) => {

					})

				}
			}
		})

	}

} 

module.exports = new AppointmentService()
