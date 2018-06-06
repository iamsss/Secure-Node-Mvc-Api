const {hbs} = require('../server');

hbs.registerHelper('getCurrentYear',()=>{ //Pipe with No Arguments
    return new Date().getFullYear();
    });