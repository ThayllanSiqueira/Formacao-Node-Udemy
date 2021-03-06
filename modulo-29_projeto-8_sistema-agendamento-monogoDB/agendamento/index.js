const express = require("express");
const app = express();
const mongoose =require("mongoose");
const AppointmentServices = require("./services/AppointmentServices");
const appointmentService = require("./services/AppointmentServices"); 

app.use(express.static("public"));
//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: false}));
//app.use(bodyparser.json());
app.use(express.json());

app.set('view engine', 'ejs');

mongoose.connect("mongodb://localhost:27017/agendamento", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/cadastro", (req, res) => {
    res.render("create");
});

app.post("/create", async (req, res) => {
    var status = await appointmentService.Create(
        req.body.name, 
        req.body.email, 
        req.body.description,
        req.body.cpf,
        req.body.date,
        req.body.time
        )

    if (status) {
        res.redirect("/");
    } else {
        res.send("Ocorreu uma falha!");
    }
});

app.get("/getcalendar", async (req, res) => {
    var appointments = await AppointmentServices.GetAll(false);
    res.json(appointments);
});

app.get("/event/:id", async (req, res) => {
    var appointment = await AppointmentServices.GetById(req.params.id);
    res.render("event", {appo: appointment});
});

app.post("/finish", async (req, res) => {
    var id = req.body.id;
    var result = await AppointmentServices.Finish(id);
    res.redirect("/");
});

app.get("/list", async (req, res) => {
    var appos = await AppointmentServices.GetAll(true);
    res.render("list", {appos});
});

app.get("/searchresult", async (req, res) => {
    var appos = await AppointmentServices.Search(req.query.search);
    res.render("list", {appos});
});

var poolTime = 5 * 60000;
//var poolTime = 5000;

setInterval(async () => {
    //console.log("A task Rodou...")
    await AppointmentServices.SendNotification();

}, poolTime);




app.listen(8080, () => {});