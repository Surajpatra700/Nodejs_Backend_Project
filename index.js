const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5700;
const noteRouter = require("./routes/noteroutes");
const userRouter = require("./routes/userRoutes");

app.use(express.json());

app.use('/users', userRouter);
app.use('/note',noteRouter);
require("./mongo_js_testing/conn");

app.listen(port, function () {
	console.log("Server is listening at port:" + port);
});

app.get('/', (req, res)=>{
    res.send("Hello");
});

// userController.js, index.js, userRoutes.js, conn.js, user.js are involved in authentication process