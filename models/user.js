const mongoose = require('mongoose');

const UserData = mongoose.Schema({
    username: String,
    password: String,
    email: String,
});

module.exports = mongoose.model(
    "loggers", UserData
);