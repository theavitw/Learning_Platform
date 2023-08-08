const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        "title": String,
        "courses": Array

    });

const user = mongoose.model('user', schema);

module.exports = user;