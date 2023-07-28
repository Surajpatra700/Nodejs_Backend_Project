
// import http from "http"

// http.createServer((req, res) => {
//     res.writeHead(200, {
//         "Content-Type": "text/html",
//     })
//     res.write("hello");
//     res.end();
// }).listen(8088)

// Coding at Express

import express, {Request, Response} from "express";

const app = express();
import { router } from "./routes/routes";

// app.get("/", (req, res)=>{
//     //res.send("API is Running");
//     res.status(200).json({
//         message: "API IS RUNNING"
//     })
// });

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use("/", router);

app.listen(6500, ()=> {
    console.log("API running at port 6500");
})