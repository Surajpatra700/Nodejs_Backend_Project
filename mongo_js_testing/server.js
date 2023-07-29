
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

//const api = require('./api');
const userRouter = require('./router');
const personRouter = require("./router2");

const port = 4500;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/db',userRouter);
app.use('/user',personRouter);
require('./conn');

app.listen(port, function () {
	console.log("Server is listening at port:" + port);
});

// Parses the text as url encoded data

// Parses the text as json
//app.use('/api', ()=> console.log("Server is Listening at Port: "+ port));