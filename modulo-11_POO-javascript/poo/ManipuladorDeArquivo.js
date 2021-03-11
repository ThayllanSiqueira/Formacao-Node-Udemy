//Composição
class Leitor {
    Ler(caminho){
        return "Conteudo do arquivo";
    }
}

class Escritor {
    Escrever(arquivo, conteudo){
        console.log("Conteudo escrito");
    }
}

class Criador {
    Criar(nome){
        console.log("Arquivo Criado");
    }
}

class CriadorDePDF {
    Criar(nome){
        console.log("Criando PDF...");
    }
}

class Destruidor {
    Deletar(nome){
        console.log("Deletando arquivo");
    }
}

class ManipuladorDeArquivo {
    constructor(nome){
        this.arquivo = nome;
        this.leitor = new Leitor();
        this.escritor = new Escritor();
        this.criador = new Criador();
        this.destruidor = new Destruidor();
    }
}

class GerenciadorDeUsuarios {
    constructor(){
        this.criador = new CriadorDePDF();
        this.escritor = new Escritor();
    }

    SalvarListaDeUsuarios(lista){
        this.criador.Criar("usuarios.txt");
        this.escritor.Escrever("usuarios.txt", lista);
    }
}

var manipulador = new ManipuladorDeArquivo("file.txt");

manipulador.leitor.Ler();
manipulador.escritor.Escrever();
manipulador.criador.Criar();
manipulador.destruidor.Deletar();

var usuarios = new GerenciadorDeUsuarios();

usuarios.SalvarListaDeUsuarios(["Darlam", "Felope"]);