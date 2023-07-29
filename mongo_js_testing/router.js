const express = require('express');
const router = express.Router();
const StudentModel = require('./studentSchema');

// Get request

router.get('/save', async (req, res) => {
    const newStudent = new StudentModel({
        StudentId: 110,
        Name: "Sam", Roll: 1, Birthday: "2001 - 09 - 08"
    });
    await newStudent.save();
    res.status(200).json(newStudent);
});

// Post request

router.post('/save', async (req, res) => {
    const newStudent = new StudentModel();
    newStudent.StudentId = req.body.StudentId;
    newStudent.Name = req.body.Name;
    newStudent.Roll = req.body.Roll;
    newStudent.Birthday = req.body.Birthday;
    await newStudent.save();
    res.status(200).json(newStudent);
});

// ************** Retrieving Data from MongoDb ******************

try {
    router.get('/retrieve', async (req, res) => {
        const data = await StudentModel.find();
        res.status(200).json(data);
    });
} catch (error) {
    console.log(error);
}

try {
    router.get('/retrieveOne', async (req, res) => {
        const data = await StudentModel.findOne({ StudentId: { $gt: 101 } });
        res.status(200).json(data);
    });
} catch (error) {
    console.log(error);
}

// ***************** Deleting Data ************************

try {
    router.get('/delete', async (req, res) => {
        const data = await StudentModel.deleteOne({ StudentId: 100 });
        res.status(200).json(data);
    });
} catch (error) {
    console.log(error);
}

// ***************** Updating Data **********************

try {
    router.post('/update', async (req, res) => {
        const data = await StudentModel.updateOne({StudentId: 105})
        res.status(200).json(data);
    });
} catch (error) {
    console.log(error);
}

module.exports = router;