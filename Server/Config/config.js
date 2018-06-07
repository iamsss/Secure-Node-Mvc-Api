var env = process.env.NODE_ENV || 'development';


console.log('Our Environment is ', env);

if(env  === "development" || env === "test" || env === "production"){
    var config = require('./config.json');
    var envConfig  = config[env];

    Object.keys(envConfig).forEach((key) => {
        process.env[key]= envConfig[key];
    });
}

