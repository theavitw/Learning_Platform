const mongoose = require('mongoose');
const uri = 'mongodb+srv://Your_Name:Password@cluster0.xgs7wkx.mongodb.net/?retryWrites=true&w=majority';

const  connect = mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = connect;  
