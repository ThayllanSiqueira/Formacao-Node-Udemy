class Dado {
    constructor(faces) {
        this.faces = faces
    }

    Rolar(){
        //Math.floor(Math.random() * 5) + 1; //Uma forma de retornar numero aleatorios
        console.log("Resultado do dado: " + (Math.floor(Math.random() * this.faces) + 1));
        //console.log("Resultado do dado: " + this.GetRandomIntInclusive(1, this.faces));
    }

    GetRandomIntInclusive(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

var d6 = new Dado(6);
//var d12 = new Dado(12);

d6.Rolar();