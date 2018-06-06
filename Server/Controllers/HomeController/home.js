const {app} = require('../../server');

app.get('/', (req, res) => res.render(
    'home',{
        
        pageTitle: 'About Page',
        greeting: 'Welcome to My Home Page'
    }
));