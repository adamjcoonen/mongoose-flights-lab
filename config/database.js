const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flights', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

//short cut to the mongoose.connection object
const db = mongoose.connection;

db.on('connected', function(){
    console.log(`connected to the mongo DB at ${db.host}:${db.port}`)
});



