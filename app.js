const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));






process.on('SIGINT', () => {
    server.close();
    console.log('Exit Server');
    process.exit(0);
});