// VAR só tem dois escopos: Global e Local
var nome = "Thayllan"; // Global

//LET tambem tem esses escopos: Global, Local e Bloco
let nome2 = "João";

// Global: Todo mundo pode usar esse cara!
//Local: Só a função onde foi declarado, pode usa-lo.

function func1(){
    var sobrenome = "Felipe"; // Local
    var sobrenome2 = "Oliveira"; // Local
    console.log("oi " + nome + " " + sobrenome);
    console.log("oi " + nome2 + " " + sobrenome2);
}

function func2(){
    //console.log("olá " + nome + " " + sobrenome); // Error
    console.log("olá " + nome);
}

func1();
func2();
console.log(nome);
console.log(nome2);
console.log("#####################################################################################################");


