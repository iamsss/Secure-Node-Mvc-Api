

const {  app } = require('../Server/server');
const {  User } = require('../Server/Model/User');

const users = [
    { username: 'barfooz', email: 'saurav@gmail.com',password: 'qwert12345', role: 'Manager' },
    { username: 'saurav', email: 'hjdhkj@hskd.com', password: 'qwert12345',  role: 'Owner' }
    
]
const populate2users = (done) => {
User.bulkCreate(users).then(u => {
    done();
});
}

module.exports = { populate2users,users };