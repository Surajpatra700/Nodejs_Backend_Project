// Importing .env file 
require('dotenv').config(); // .config() loads .env file into process.env

const name = require("./second");
console.log("Hello World", name);
console.log(process.env.MY_API);