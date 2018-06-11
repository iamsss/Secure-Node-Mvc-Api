const {
  app
} = require('../../server');
const {
  User
} = require('../../Model/User');
const {generateToken, authenticate,HasRole} = require('../../Middleware/authenticate');

const jwt = require('jsonwebtoken');
// Get All Users 
app.get('/users',authenticate, (req, res) => {
  // find multiple entries
  User.findAll().then(projects => {
    res.send(projects);
  }).catch((err) => {
    res.status(404).send(err);
  });
});

//Get Users By Id
app.get('/users/:id', HasRole("Admin") , (req, res) => {
  var id = req.params.id;

  User.findById(id).then((user) => {
    if (!user) {
      return res.status(404).send('No User Found');
    }
    res.send(user);
  }).catch((e) => {
    res.status(404).send(e);
  })
});


// Post Request 
app.post('/users', (req, res) => {
  
  User.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    role: req.body.role
  }).then(user => {
    var userTokenData = {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      access:'auth'
    }
      
      const token = jwt.sign(userTokenData, process.env.JWT_SECRET).toString();
      res.header('x-auth', token).send(user);
  }).catch((e) => {
    res.status(400).send(e);
  });
})

// Put Request 

app.put('/users/:id', (req, res) => {
  var id = req.params.id;

  User.update(
    req.body, {
      where: {
        id: id
      }
    }).then((u) => {
    res.send(u);
  }).catch((e) => {
    res.status(404).send();
  })
})


// Delete Request

app.delete('/users/:id', (req, res) => {
  var id = req.params.id;
  User.destroy({
    where: {
      id: id
    }
  }).then(() => {
    res.status(200).send('User Deleted');
  }).catch((e) =>   {
    res.status(404).send();
  })

})