const fs = require("fs");
const util = require("util");

class Reader {

    constructor(){
        this.reader = util.promisify(fs.readFile)
    }

    async Read(filepath){
        /* fs.readFile(filepath, "utf8", (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        }); */

        try {
            return await this.reader(filepath, "utf8");
        } catch (error) {
            return undefined;
        }

    }
}

module.exports = Reader;