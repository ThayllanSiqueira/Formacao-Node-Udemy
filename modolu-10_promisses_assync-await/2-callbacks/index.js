function enviarEmail(corpo, para, callback){
    setTimeout(() => {
        console.log(`
            Para: ${para}
            -----------------------------
            ${corpo}
            -----------------------------
            De: Darlam Felope
        `);
        callback();
    }, 8000);
}

console.log("Inicio de envio de e-mail!");
enviarEmail("Oi, seja bem vindo ao Guia", "Thayllan@gmail.com", () =>{
    console.log("Seu e-mail foi enviado, deve chegar em minutos");
    console.log("Tudo Okay!");  
});
