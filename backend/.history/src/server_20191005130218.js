const express = require('express');
const routes = require('./routes');
const mongoose = require('./mongoose');


const app = express();

// req.query => acessar query params (para filtros)
// req.params => acessar route params (para edicao, delete)
// req.body => acessar corpo da requisicao (para criacao, edicao)

app.use(express.json());
app.use(routes);


app.listen(3333)