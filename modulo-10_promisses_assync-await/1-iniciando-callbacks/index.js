function enviarEmail(corpo, para){
    setTimeout(() => {
        console.log(`
            Para: ${para}
            -----------------------------
            ${corpo}
            -----------------------------
            De: Darlam Felope
        `);
    }, 8000);
}

console.log("Inicio de envio de e-mail!");
enviarEmail("Oi, seja bem vindo ao Guia", "Thayllan@gmail.com")
console.log("Seu e-mail foi enviado, deve chegar em minutos");
console.log("Tudo Okay!");