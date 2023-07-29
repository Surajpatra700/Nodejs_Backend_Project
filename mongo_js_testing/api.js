const mongoose = require('mongoose');
const express = require('express');
require("dotenv").config();
const router = express.Router();
const StudentModel = require('./studentSchema');

// Connecting to database
const query = process.env.MONGO_URL

const db = (query);
mongoose.Promise = global.Promise;

// mongoose.connect(db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// },()=>console.log("connected to db"), function (error) {
//     if (error) {
//         console.log("Error!" + error);
//     }
// });


module.exports = router;

