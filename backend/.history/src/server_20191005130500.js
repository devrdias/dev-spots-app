const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();
mongoose.connect('mongodb+srv://oministack:oministack@oministack-lbp3r.mongodb.net/aircnc?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// req.query => acessar query params (para filtros)
// req.params => acessar route params (para edicao, delete)
// req.body => acessar corpo da requisicao (para criacao, edicao)

app.use(express.json());
// app.use(routes);


app.listen(3333)