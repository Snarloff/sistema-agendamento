const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const colors = require('colors')
const app = express()

const AppoinmentService = require('./services/AppointmentService')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect('URL_MONGO_DB', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.set('useFindAndModify', false)

app.get('/', (req, res) => {
	return res.render('index')
})

app.get('/cadastrar', (req, res) => {
	return res.render('create')
})

app.post('/cadastrar', async (req, res) => {

	const { name, email, description, cpf, date, time } = req.body

	const status = await AppoinmentService.Create({
		name, email, description, cpf, date, time
	})

	if (status) {
		return res.redirect('/')
	}

	return res.status(500).send('Ocorreu um erro!')

})

app.get('/consultas', async (req, res) => {
	let appointments = await AppoinmentService.GetAll(false)
	return res.json(appointments)
})

app.get('/consulta', async (req, res) => {

	let appointment = await AppoinmentService.GetById(req.query.id)
	return res.render('appointments', { appointment })

})

app.post('/finalizar', async (req, res) => {

	let status = await AppoinmentService.Finish(req.body.id)

	if (status) {
		return res.redirect('/') // success
	}

	return res.redirect('/consulta?=' + req.body.id)

})

app.get('/listar', async (req, res) => {
	let appointments = await AppoinmentService.GetAll(true)
	return res.render('list', { appointments })
})

app.get('/pesquisar', async (req, res) => {
	let appointments = await AppoinmentService.Search(req.query.query)
	return res.render('list', { appointments })
})

/* Notification System */

const POLLING_INTERVAL = 1 * 60000
// const POLLING_INTERVAL = 5000

setInterval(async () => {
	await AppoinmentService.SendNotification()
}, POLLING_INTERVAL)

app.listen(8080, () => {
	console.clear()
	console.log(colors.magenta('[STATUS] ') + colors.green('Successfully Started'))
	console.log(colors.magenta('[DEVELOPER] ') + colors.rainbow('Snarloff'))
})
