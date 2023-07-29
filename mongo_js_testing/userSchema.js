const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Name: String,
    RegNo: Number,
    Branch: String,
    Location: String,
});

// Creating a new collection with name User & exporting it
module.exports = mongoose.model("User", userSchema);