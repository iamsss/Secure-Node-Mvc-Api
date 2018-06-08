const {app} = require('../../server');
const {User} = require('../../Model/User');

app.get('/users',(req,res) => {
    // find multiple entries
User.findAll().then(projects => {
   res.send(projects);
  }).catch((err) => {
    res.status(404).send(err);
  });
});