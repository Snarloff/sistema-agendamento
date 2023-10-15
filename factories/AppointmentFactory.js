class AppointmentFactory {
	
	Build(simpleAppointment){

		/* id, title, start, end */

		const configBuild = {
			day: simpleAppointment.date.getDate() + 1,
			month: simpleAppointment.date.getMonth(),
			year: simpleAppointment.date.getFullYear(),
			hour: Number.parseInt(simpleAppointment.time.split(':')[0]),
			minutes: Number.parseInt(simpleAppointment.time.split(':')[1]),
		}

		const startDate = new Date(configBuild['year'], 
			configBuild['month'], configBuild['day'], 
			configBuild['hour'], configBuild['minutes'], 0, 0
		)

		/*
			set to brazillian timezone, but isn't important because the fullcalendar converts again to -3 hours :(
			startDate.setHours(startDate.getHours() - 3)
		*/

		return {
			id: simpleAppointment._id, 
			title: simpleAppointment.name + ' - ' + simpleAppointment.description,
			start: startDate, end: startDate,
			notified: simpleAppointment.notified,
			email: simpleAppointment.email
		}

	}
}

module.exports = new AppointmentFactory()