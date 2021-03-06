const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();
mongoose.connect('mongodb+srv://oministack:oministack@oministack-lbp3r.mongodb.net/aircnc?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static());
app.use(routes);


app.listen(3333)