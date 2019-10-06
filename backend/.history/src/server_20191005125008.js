const express = require('express');

const app = express();

// req.query => acessar query params (para filtros)
// req.params => acessar route params (para edicao, delete)
// req.body => acessar corpo da requisicao (para criacao, edicao)

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ message: "Hello World!" });
})

app.listen(3333)