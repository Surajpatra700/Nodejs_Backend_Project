
require('dotenv').config();
const app = require('express')();
const http = require('http').Server(app);

const mongoose = require('mongoose');

// password: NzOpwAEtcMNaJpzS
// username: surajpatra

mongoose.connect(process.env.MONGO_URL);

const User = require('./userModel');

// const saveUser = async () => {
//     const newUser = new User({
//         name: "suraj",
//         email: "suraj@gmail.com"
//     })

//     await newUser.save();
// }

// saveUser();

const getUsers = async() => {
    const users = await User.findOne({name: "suraj"});
    console.log(users);
}

getUsers();


const data = {
    name: "Suraj Patra",
    email: "surajpatra@gmail.com"
}

http.listen(6000, function () {
    console.log("Server is running");
})