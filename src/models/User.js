const { model } = require('mongoose');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id :{
        type : Number ,
        unique : true 
    },
    email : String,
    address : String,
    Bdate : Date,
    password : Number,
    image: String,
    location : [String],

})

const User = mongoose.model('User', UserSchema);

const save = userInfo => {
    const saveUser = new Events(userInfo);
    return saveUser.save();
  };

  
module.exportes = save ;
module.exportes = User ;

