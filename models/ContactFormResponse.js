const mongoose = require('mongoose');

const formSchema ={
    name:String,
    email:String,
    message:String
}

const form = mongoose.model("form", formSchema);

module.exports = form;
