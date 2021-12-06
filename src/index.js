const { request, response } = require('express');
const express = require('express')

const app = express();

app.use(express.json());


app.get("/paginas", (request, response) => {
    const query = request.query;
    console.log(query);
    return response.json(["home", "serviços", "contato"]);
});

app.post("/paginas",(request, response) => {
    const body = request.body;
    console.log(body)
    return response.json(["home", "serviços", "contato", "faq"]);

});

app.put("/paginas/:id", (request, response) => {
    const {id} = request.params;
    console.log(id);
    return response.json(["sobre nós", "serviços", "contato", "faq"]);
});

app.patch("/paginas/:id", (request, response) => {
    return response.json([ "sobre nós", "clientes", "contato", "faq"]);

});

app.delete("/paginas/:id", (request, response) => {
    return response.json(["sobre nós", "serviços", "faq"]);
});

app.listen(3333);