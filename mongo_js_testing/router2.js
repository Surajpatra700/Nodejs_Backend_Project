const express = require('express');
const router = express.Router();
const UserModel = require('./userSchema');

// Get request

router.post('/insertData', async (req, res) => {
    try {
        // res.status(200).json("hehe")
        const newStudents = new UserModel({
            Name: "Satyam", RegNo: 210, Branch: "CSE", Location: "2001- 09 -08 street"
        });
        await newStudents.save();
        res.status(200).json(newStudents);
    } catch (err) {
        console.error(err);
    }
});

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