const express = require('express');

const hbs = require('hbs');
const app = express();
const port = 3000;

const path = require('path');

const publicPath = path.join(__dirname, '../Public');

app.set('view engine', 'hbs'); // set configuration for views

app.use(express.static(publicPath));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));