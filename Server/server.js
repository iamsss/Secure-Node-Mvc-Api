const express = require('express');
const app = express();
const port = 3000;
const hbs = require('hbs');

module.exports = { app,hbs }; 


require('./Pipe/upper.pipe');
require('./Pipe/currentYear.pipe');
require('./Config/view.config');
require('./Controllers/HomeController/home');


// The 404 Not Found Route (ALWAYS Keep this as the last route)
require('./Middleware/notFound');

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

