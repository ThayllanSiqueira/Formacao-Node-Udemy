class Filme {
    constructor(titulo, ano, genero, diretor, duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.duracao = duracao;
        this.atores = [];
    }

    Reproduzir(){
        console.log("Reproduzindo....");
    }

    Pausar(){
        console.log("Pausado ||....");
    }

    Avancar(){
        console.log("Avançar >> ....");
    }

    Fechar(){
        console.log("Fechar X ....");
    }

    Ficha(){
        console.log("Título: " + this.titulo);
        console.log("Ano de lançamento: " + this.ano);
        console.log("Genero: " + this.genero);
        this.Reproduzir();
        this.Avancar();
    }


}

var vingadores = new Filme("Vingadores 2", 2014, "Ação", "2h");

/* console.log("Título do filme: " + vingadores.titulo);
console.log("Ano de lançamento: " + vingadores.ano); */

vingadores.Ficha();