function enviarEmail(corpo, para, callback){
    setTimeout(() => {
        /* console.log(`
            Para: ${para}
            -----------------------------
            ${corpo}
            -----------------------------
            De: Darlam Felope
        `); */

        var err = false;
        if (err) {
            callback(12,"O envio do email falhou!");
        } else {
            callback(12);
        }
        
    }, 8000);
}

console.log("Inicio de envio de e-mail!");
enviarEmail("Oi, seja bem vindo ao Guia", "Thayllan@gmail.com", (time, err) =>{
    if (err == undefined) {
        console.log("Tudo Okay!");  
        console.log(`Tempo: ${time}`);  
    } else {
        console.log(err);
    }
});
