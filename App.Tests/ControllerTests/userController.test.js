const expect = require('expect');
const request = require('supertest');

const {  app } = require('../../Server/server');
const {  User } = require('../../Server/Model/User');
const { populate2users , users} = require('../../App.Seeds/populateUsers');



beforeEach((done) => {
    User.sync({force: true}).then(()=> { 
       populate2users(done);
    }).catch((e)=>{
        done(e)
    })
})

describe('Testing Controller users', () => {
    it('It should return 2 users', (done) => {
        request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
            expect(res.body[0].email).toBe(users[0].email);
            expect(res.body.length).toBe(2);
        }).end(done);
    });

    // it('It should shame as users', (done) => {
           
    // });

});