const appointment = require("../models/Appointment");
const mongoose =require("mongoose");
const AppointmentFactory = require("../factories/AppointmentFactory")

const Appo = mongoose.model("Appointment", appointment);

class AppointmentService { 
    async Create(name, email, description, cpf, date, time){
        try {
            var newAppo = new Appo({
                name,
                email,
                description,
                cpf,
                date,
                time, 
                finished: false
            });
            await newAppo.save();
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    async GetAll(showFinished){
        if (showFinished) {
            return await Appo.find();
        } else {
            var appos = await Appo.find({finished: false});
            var appointments = [];
            appos.forEach(appointment => {
                if (appointment.date != undefined) {
                    appointments.push(AppointmentFactory.Build(appointment));
                }
            });

            return appointments;
        }
    }
}

module.exports = new AppointmentService(); 