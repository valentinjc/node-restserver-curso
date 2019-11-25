const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');




require('./config/config');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Routes
app.use(require('./routes/index'));


mongoose.connect(process.env.URLBD, { useNewUrlParser: true, useCreateIndex: true }, (err, res) => {


    if (err) throw err;
    console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT, () => {
    console.log("Escucuando puerto 3000");
})