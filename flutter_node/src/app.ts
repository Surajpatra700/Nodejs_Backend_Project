// Coding at Express

//import { postDataToMongoDB } from "../../mongoDB/appmongo";
import express, { Request, Response } from "express";

const app = express();
import { router } from "./routes/routes";


// app.get("/", (req, res)=>{
//     //res.send("API is Running");
//     res.status(200).json({
//         message: "API IS RUNNING"
//     })
// });
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//postDataToMongoDB();
app.use("/", router);

app.listen(6500, () => {
    console.log("API running at port 6500");
})