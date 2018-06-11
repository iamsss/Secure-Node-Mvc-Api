
const jwt = require('jsonwebtoken');

var authenticate = (req,res,next) => {
    var token = req.header('x-auth');
    var decoded;  
    try {
        decoded = jwt.verify(token,process.env.JWT_SECRET)
    }catch(e){
        res.status(401).send();
    }

    if(decoded) {
        next();
    }else{
        res.status(401).send();
    }
};


const generateToken = (userTokenData) => {
    const token = jwt.sign(userTokenData, process.env.JWT_SECRET).toString();
    return token;
}

module.exports = {
    authenticate,generateToken
}