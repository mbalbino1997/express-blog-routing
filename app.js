const express = require("express");
const app = express();
const port = 3000;
const posts = require("./data/posts.js");
app.use(express.static("public"));

app.get("/posts", (req, res) => {
    res.send("lista dei post")
});

app.get("/posts/:id", (req, res) => {
    res.send(`Dettagli del post ${req.params.id}`)
});

app.post("/posts", (req, res) => {
    res.send("Creazione nuovo post")
});

app.put("/posts/:id", (res, req) => {
    res.send("Modifica totale del post")
})




const server = app.listen(port, () => {
    console.log(`server in ascolto sula porta ${port}`)
})
process.on('SIGINT', () => {
    server.close();
    console.log('Exit Server');
    process.exit(0);
});