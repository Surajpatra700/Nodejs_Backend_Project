const express = require('express');
const router = express.Router();
const UserModel = require('./userSchema');
// const { route } = require('./router2');

// Post request

router.post('/insertData', async (req, res) => {
    try {
        console.log("Inserting");
        const newStudents = new UserModel(
        //     {
        //     Name: "Satyam", RegNo: 210, Branch: "CSE", Location: "2001- 09 -08 street"
        // }
        req.body
        );
        await newStudents.save();
        //res.status(200).json(newStudents);
        res.json(await UserModel.find());
    } catch (err) {
        console.log(err);
    }
});

// Get Request

router.get("/getData", async(req, res)=>{
    try{
        const data= await UserModel.find();
        res.status(200).json(data);
    }catch(e){
        console.log(e);
    }
})

// Delete single children's data

router.delete("/deleteOneById/:id", async(req, res)=>{
    try{
        const data = await UserModel.findByIdAndDelete(req.params.id);
        console.log("Student data deleted Succesfully");
        res.json(await UserModel.find());
    }catch(e){
        console.log(e);
    }
})

// Delete all data

router.delete("/deleteAll",async(req, res)=>{
    try{
        await UserModel.deleteMany();
        console.log("All Employee Deleted");
        res.json(await UserModel.find());
    }catch(e){
        console.log("data deleted");
    }
})

module.exports = router;

// router.post('/savedata', async (req, res) => {
//     const newStudent = new StudentModel();
//     newStudent.Name = req.body.Name;
//     newStudent.RegNo = req.body.RegNo;
//     newStudent.Branch = req.body.Branch;
//     newStudent.Location = req.body.Location;
//     await newStudent.save();
//     res.status(200).json(newStudent);
// });