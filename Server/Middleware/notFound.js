const {app} = require('../server');

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
    res.render('error');
});