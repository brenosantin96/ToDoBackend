const mongoose = require ('mongoose');

module.exports = mongoose.connect('mongodb://localhost/api', {useNewUrlParser: true}, () =>{
    console.log("Connected to Database!");
})