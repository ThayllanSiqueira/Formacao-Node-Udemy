class Processor{

    static Process(data){
        var arrRows = data.split("\r\n");
        var rows = [];
        arrRows.forEach(row => {
            var arrRow = row.split(";");
            rows.push(arrRow);
        });
        return rows;
    }
}

module.exports = Processor;