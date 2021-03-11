const Reader = require("./Reader");
const Writer = require("./Writer");
const PDFWriter = require("./PDFWriter");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");

var leitor = new Reader();
var escritor = new Writer();

async function main(){
    var dados = await leitor.Read("./users.csv");
    var dataProcess = Processor.Process(dados);

    var users = new Table(dataProcess);
    //users.rows.push(["Darlam Felope", "Formação PHP", "PHP", "32"]);

    var html = await HtmlParser.Parse(users);

    var up = await escritor.Write(Date.now() + ".html", html);
    console.log(up);

    PDFWriter.WritePDF(Date.now() + ".pdf", html)

}

main();