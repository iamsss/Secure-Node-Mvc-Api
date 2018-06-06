const express = require('express');
const app = express();
const port = 3000;

module.exports = { app }; 


require('./Config/view.config');

app.get('/', (req, res) => res.render(
    'home',{
        
        pageTitle: 'About Page',
        greeting: 'Welcome to My Home Page'
    }
));

console.log("Partials Path : ",__dirname + '/Views/partials');


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

