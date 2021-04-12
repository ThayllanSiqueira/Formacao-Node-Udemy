const appointment = require("../models/Appointment");
const mongoose =require("mongoose");
const AppointmentFactory = require("../factories/AppointmentFactory");
const mailer = require("nodemailer");

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
                finished: false,
                notified: false
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

    async GetById(id){
        try {
            var event = await Appo.findOne({'_id': id});
            return event;
        } catch (err) {
            console.log(err);
        }
    }

    async Finish(id){
        try {
            await Appo.findByIdAndUpdate(id,{finished: true});
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    async Search(query){
        try {
            if (query != "") {
                var appos = await Appo.find().or([{email: query},{cpf: query}]); 
                return appos;
            } else {
                var appos = await this.GetAll(true); 
                return appos;
            }
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async SendNotification(){
        var appos = await this.GetAll(false);

        var transporter = mailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "097c8901f500cc",
                pass: "0c5bd9d9be9f73"
            }
        });

        appos.forEach(async app =>{
            var date = app.start.getTime();
            var hour = 1000 * 60 * 60;
            var gap = date - Date.now();
            if(gap <= hour){
                if (!app.notified) {
                    await Appo.findByIdAndUpdate(app.id, {notified: true});

                    transporter.sendMail({
                        from: "Thayllan Felipe <thay@nerdez.com.br>",
                        to: app.email,
                        subject: "Sua consulta lembre de chegar no horario",
                        text: "Sua consulta vai acontever em 1h!"
                    }).then(() => {
                        console.log("Mail enviado");
                    }).catch(err => {
                        console.log(err);
                    });



                } 
                
            }
        });
    }
}

module.exports = new AppointmentService(); 