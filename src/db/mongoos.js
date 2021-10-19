const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/EqDatabase', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('connection succeffucle ...');
}).catch( (error)=> {
    console.log(' somthing went wrong ', error);
})

