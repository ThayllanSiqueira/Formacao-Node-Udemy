function pegarId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var err = false;
            if (!err) {
                resolve(5); //Promessa Okay
            } else {
                reject("Deu erro tente novamente mais tarde...."); //Deu ruim, falhou!!
            }
        }, 1500);
    })
}

function buscarEmailNoBanco(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var err = false;
            if (!err) {
                resolve("thay@mail.com"); //Promessa Okay
            } else {
                reject("Tem email hoje não...."); //Deu ruim, falhou!!
            }
        }, 2000);
    })
}

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

function  pegarUsuarios(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {nome: "Victor", lang: "JS"},
                {nome: "Darlam", lang: "PHP"},
                {nome: "Felope", lang: "Python"}
        
            ]); //Promessa Okay
            
        }, 2000);
    })
}

async function principal() {
    var id = await pegarId();
    var email = await buscarEmailNoBanco(id);
    enviarEmail("Olá q tal", email).then(() => {
        console.log("Email enviado, para o usuário com id: " + id)
    }).catch(err =>{
        console.log(err);
    })
    
}

principal();


/* pegarId().then(id => {

    buscarEmailNoBanco(id).then(email =>{

        enviarEmail("Olá q tal", email).then(() => {
            console.log("Email enviado, para o usuário com id: " + id)
        }).catch(err =>{
            console.log(err);
        })

    });

}); */


