function enviarEmail(corpo, para, callback){
    setTimeout(() => {
        console.log(`
            Para: ${para}
            -----------------------------
            ${corpo}
            -----------------------------
            De: Darlam Felope
        `);
        callback("OK", 5, "8s");
    }, 8000);
}

console.log("Inicio de envio de e-mail!");
enviarEmail("Oi, seja bem vindo ao Guia", "Thayllan@gmail.com", (status, amount, time) =>{
    console.log(`
        Status: ${status}
        -----------------
        Contatos: ${amount}
        -------------------
        Tempo de envio: ${time}
    `);
    console.log("Tudo Okay!");  
});
