//Herança
class Animal{
    constructor(nome, idade, preco){
        this.nome = nome;
        this.idade = idade;
        this.preco = preco
    }

    ChecarEstoque(){
        return 10;
    }

    MetodoQualquer(){
        console.log("Esse método faz parte da classe mãe!");
    }
}

class Cachorro extends Animal{

    constructor(nome, idade, preco, raca, peso){
        super(nome, idade, preco);
        this.raca = raca;
        this.peso = peso;

    }

    Latir(){
        console.log("Rolf! Rolf!");
    }

    ChecarEstoque(){
        console.log("Na loja temos 20 dogs");
    }

    MetodoQualquer(){
        console.log("Na classe de Cachorrão");
        super.MetodoQualquer();
        console.log("Aqui vem mais funcionalidade");
    }
}

var dog = new Cachorro("Lilu", 5, 250, "Fila", 30);

console.log(dog.ChecarEstoque());
dog.Latir();

