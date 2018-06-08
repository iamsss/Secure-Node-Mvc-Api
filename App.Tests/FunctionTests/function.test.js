const expect = require('expect');
const request = require('supertest');

const {  app } = require('../../Server/server');
const {  User } = require('../../Server/Model/User');
const { populate2users } =  require('../../App.Seeds/populateUsers');
 // this will drop the table first and re-create it afterwards
beforeEach((done) => {
    User.sync({force: true}).then(()=> { 
     //   populate2users(done);
     done();
    }).catch((e)=>{
        done(e)
    })
})


describe('Test for fuction populate2users', () => {
    it('It should sucess populating two users ', (done) => {
        populate2users(done);    
    });

});
