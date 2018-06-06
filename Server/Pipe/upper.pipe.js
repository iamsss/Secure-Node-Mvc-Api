const {hbs} = require('../server');


hbs.registerHelper('upper',(text)=>{ // Pipe with one Argumnent
    return text.toUpperCase();
    });