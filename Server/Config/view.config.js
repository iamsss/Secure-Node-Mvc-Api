
const {app,hbs} = require('../server');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Path Declarations
const publicPath = path.join(__dirname, '../../Public');
const partialViewPath = path.join(__dirname, '../Views/partials');
const viewPath = path.join(__dirname, '\../Views');


app.use(bodyParser.json());
app.use(express.static(publicPath));
app.set('views', viewPath );  // Setting Default Path For Views
app.set('view engine', 'hbs'); // set configuration for views

//to set Partial View
hbs.registerPartials(partialViewPath);


