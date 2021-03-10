function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var nome = "Thayllan";
            var err = false;
            if (!err) {
                resolve({nome, time: '8s', to: para}); //Promessa Okay
            } else {
                reject("Fila lotada dá mais não parceiro"); //Deu ruim, falhou!!
            }
        }, 3000);
    })
}

enviarEmail("Olá mundo", "thay@mail.com").then( ({nome, time, to}) => {
    console.log("Opa, Finish");
    console.log(`
        Acabou para você ${nome}
        ----------------------------
        Esse tempo: ${time}
        ----------------------------
        Para quem? ${to}
    
    `);
}).catch( err => {
    console.log("Deu ruim meu amigo.");
    console.log(err);
})
console.log("Depois da Promessa....");