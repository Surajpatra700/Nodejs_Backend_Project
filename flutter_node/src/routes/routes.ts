import express, {Request, Response} from 'express';

const router = express.Router();

// ***************** FOR GET REQUEST ************************

router.get('/',(req, res)=>{
    res.status(200).json({
        message: "API is Running",
    })
});

router.get('/about',(req, res)=>{
    res.status(200).json({
        message: "This is About Page",
    })
});

router.get('/profile',(req, res)=>{
    res.status(200).json({
        message: "This is profile Page",
    })
});

// ******************** FOR POST REQUEST *************************

router.post('/',(req, res)=>{
    //const data = req.body.name;
    const {name, email} = req.body;

    //console.log(data);
    // res.status(200).json({
    //     message: data,
    // })
    res.status(200).json({
        message: {
            user: {
                name,
                email
            }
        }
    })
});



export {router}
