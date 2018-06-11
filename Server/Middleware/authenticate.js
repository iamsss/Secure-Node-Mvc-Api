
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


var HasRole  =  (role) => {
    return function(req, res, next) { 
     var token = req.header('x-auth');
        try {
            decoded = jwt.verify(token,process.env.JWT_SECRET)
        }catch(e){
            res.status(401).send();
        }
      if (role !== decoded.role) res.status(403).send();
      else next();
    }
  }

const generateToken = (userTokenData) => {
    const token = jwt.sign(userTokenData, process.env.JWT_SECRET).toString();
    return token;
}

module.exports = {
    authenticate,generateToken,HasRole
}