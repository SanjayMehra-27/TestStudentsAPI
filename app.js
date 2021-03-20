
const express = require("express");
const exphbs = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 8000;
const app = express();

//Controller
const studentController = require('./controllers/studentController.js');

app.use('/api', studentController);

//EXPRESS STATICS FILE
app.use('/', express.static(path.join(__dirname, '/views/')));


// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Template engine
app.engine('hbs', exphbs({ extname: 'hbs', runtimeOptions: { allowProtoPropertiesByDefault: true, allowProtoMethodsByDefault: true, }, defaultLayout: 'main-Layout', partialsDir: __dirname + '/views/layouts/partials/', layoutDir: __dirname + 'layouts' }));


app.listen(PORT, () => {
    console.log('Server Started ..');
})

