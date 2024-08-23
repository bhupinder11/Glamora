const mongoose = require("mongoose")
require('dotenv').config();

mongoose.connect(process.env.MONGO_DB)
.then(function() {
    console.log("db connected")
})
.catch(function(err){
    console.log(err)
})

module.exports = mongoose.connection;