const {
  app
} = require('../../server');
const {
  User
} = require('../../Model/User');


// Get All Users 
app.get('/users', (req, res) => {
  // find multiple entries
  User.findAll().then(projects => {
    res.send(projects);
  }).catch((err) => {
    res.status(404).send(err);
  });
});

//Get Users By Id
app.get('/users/:id', (req, res) => {
  var id = req.params.id;

  User.findById(id).then((user) => {
    if (!user) {
      return res.status(404).send('No User Found');
    }
    res.send(user);
  }).catch((e) => {
    res.status(404).send();
  })
});


// Post Request 
app.post('/users', (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    role: 'User'
  }).then(user => {
    res.status(200).send(user);
  }).catch((err) => {
    res.status(400).send(err);
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