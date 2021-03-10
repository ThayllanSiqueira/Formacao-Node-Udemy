// Paramtros opcionais

// * Sempre vir por ultimos os parametros opcionais

function soma(a = 80,b = 50){
    console.log(a + b);
}

function sub(a,b, inverter = false){
    if(inverter){
        console.log(b - a);
    } else {
        console.log(a - b);
    }
}



