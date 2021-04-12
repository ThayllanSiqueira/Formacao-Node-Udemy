const mailer = require("nodemailer");

var transporter = mailer.createTransport({
    //name: "Thayllan Felipe Monteiro Siqueira",
    //host: "smtp.gmail.com",
    //port: 465,
    //secure: true,
    service: "gmail",
    auth: {
        user: "thayllansiqueira@gmail.com",
        pass: "123456"
    }
});

transporter.sendMail({
    from: "Thayllan Felipe <thayllansiqueira@gmail.com>",
    to: "thayllan.siqueira@cleversystems.com.br",
    subject: "Email de teste do nodemailer",
    text: "Enviando email com Node js, utilizando a lib nodemailer",
    //html: "<h1> Que doidera </h1>"
}).then((msg) => {
    console.log("Mail enviado");
    console.log(msg);
}).catch(err => {
    console.log(err);
});