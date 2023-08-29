module.exports = {
    MongoURI: "mongodb://admin:admin987@cluster0-shard-00-00.r3fs6.mongodb.net:27017,cluster0-shard-00-01.r3fs6.mongodb.net:27017,cluster0-shard-00-02.r3fs6.mongodb.net:27017/auth?authSource=admin&replicaSet=atlas-638q0p-shard-0&readPreference=primary&ssl=true"
}

// // mongodb://127.0.0.1:27017/codeial

const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/Nodejs-Auth');
mongoose.connect('mongodb+srv://temp:temptemp@projects.7ht6dnv.mongodb.net/AuthJs?retryWrites=true&w=majority');

const db = mongoose.connection;
db.once('open',function(){
    console.log("Connected to DB");
});
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));


module.exports = db;