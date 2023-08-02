require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');

// const {Server} = require('ws');

//const api = require('./api');
const userRouter = require('./router');
const personRouter = require("./router2");

const port = process.env.PORT || 4500;
const app = express();
// app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/db', userRouter);
app.use('/user', personRouter);
require('./conn');

app.listen(port, function () {
	console.log("Server is listening at port:" + port);
});

app.get('/', (req, res) => {
	res.send('Reached Home');
})

// const wss = new Server({server});

// wss.on('connection', ws =>{
// 	console.log('Client Connected');
// 	ws.on('message', message => console.log('Recieved: '+ message));
// 	ws.on('close',()=> console.log('Client disconnected'));
// })

// Parses the text as url encoded data

// Parses the text as json
//app.use('/api', ()=> console.log("Server is Listening at Port: "+ port));