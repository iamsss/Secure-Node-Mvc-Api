const express = require('express');
const app = express();
const port = 3000;

module.exports = { app }; 


require('./Config/view.config');
require('./Controllers/HomeController/home');

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

