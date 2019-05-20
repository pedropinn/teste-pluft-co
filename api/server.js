const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');








//inciando app
const app = express();
app.use(express.json());
//tornar acesso publico
app.use(cors()); 

//inciando DB
mongoose.connect('mongodb://localhost:27017/restApi', {
    useNewUrlParser: true
});

requireDir('./src/models');


// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);