const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send("hello")
})

app.listen(8000, () => {
    console.log("port: 8000");
})