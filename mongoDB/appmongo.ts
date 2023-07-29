// //import { error } from "console";

// import {MongoClient} from "mongodb";
// import dotenv from "dotenv";
// dotenv.config();
// // const app = require('express')();
// // const http = require('http').Server(app);

// // const mongoose = require('mongoose');

// // password: NzOpwAEtcMNaJpzS
// // username: surajpatra

// const client = new MongoClient(process.env.MONGO_URL as string,{monitorCommands: true});
// client.connect();

// // export const mongoDBConnection = async() => {
// //     mongoose.connect(process.env.MONGO_URL as String,{useUnifiedTopology: true}).then(value)=>(
// //     (error: any,client: { db: () => any; }) => {
// //     //if(error) throw error;
// //     console.log("DB connected");
// //     const database = client.db()
// //     const collection = database.collection("todos");

// //     let dataFromMongo = await collection.find().toArray();
// //     console.log(dataFromMongo)
// // }}.catch(error);{
// //     return error.toString();
// // }}



// // export const postDataToMongoDB = () => {
// //     mongoose.connect(process.env.MONGO_URL as String,{useUnifiedTopology: true}).then((value: any)=>{
// //         (client : {db: ()=> any}) => {
// //             console.log("Connected");
// //             const Database = client.db();
// //             const collection = Database.collection("todos").then(()=>{
// //                 //let importFromMongo = collection.find().toArray();
// //                 let sendDataToMongoDb = collection.insertOne({
// //                     name: "Suraj Patra",
// //                     email: "suraj@gmail.com"
// //                 }).then((err: any, data: any)=>{
// //                     if(err) throw err;
// //                     console.log(data);
// //                 }) ;
// //                 //console.log(importFromMongo); 
// //             });
// //         }
// //     }).catch((error: { toString: () => any; })=> console.log(error.toString())
// //     )
// // }

// // ,
// // async (error: any,client: { db: () => any; }) => {
// //     if(error) throw error;
// //     console.log("DB connected");
// //     const database = client.db()
// //     const collection = database.collection("todos");

// //     let dataFromMongo = await collection.find().toArray();
// //     console.log(dataFromMongo)
// // });

// const User = require('./userModel');

// // const saveUser = async () => {
// //     const newUser = new User({
// //         name: "suraj",
// //         email: "suraj@gmail.com"
// //     })

// //     await newUser.save();
// // }

// // saveUser();

// // const getUsers = async() => {
// //     const users = await User.findOne({name: "suraj"});
// //     console.log(users);
// // }

// // getUsers();


// // const data = {
// //     name: "Suraj Patra",
// //     email: "surajpatra@gmail.com"
// // }

// // http.listen(6000, function () {
// //     console.log("Server is running");
// // })




// importing mongoose
const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
	StudentId: Number,
	Name: String,
	Roll: Number,
	Birthday: Date,
	Address: String
});

module.exports = mongoose.model(
	'student', StudentSchema, 'Students');


