

const {  app } = require('../Server/server');
const {  User } = require('../Server/Model/User');

const users = [
    { username: 'barfooz', email: 'saurav@gmail.com',birthday: new Date(1980, 6, 20) },
    { username: 'saurav', email: 'hjdhkj@hskd.com', birthday: new Date(1980, 6, 20) }
    
]
const populate2users = (done) => {
User.bulkCreate(users).then(u => {
    done();
});
}

module.exports = { populate2users,users };