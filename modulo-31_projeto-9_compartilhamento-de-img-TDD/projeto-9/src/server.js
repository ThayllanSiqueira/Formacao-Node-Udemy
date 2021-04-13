let app = require("./app");

const port = process.argv[2] || 3131;
app.listen(port, () => {
    console.log("Server runner in " + port);
})