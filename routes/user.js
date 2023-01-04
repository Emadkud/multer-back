const express= require('express')
const app = express()
const { User } = require('../models/index')
const {  directory, upload} = require('../config/multer')
const { body, validationResult } = require('express-validator')


app.post('/signup', 
body('firstName'),
body('lastName'),
body('password'),
body('email'),
async (req, res) => {
    const { errors } = validationResult(req) 
       
    const {firstName , lastName ,  email, password } = req.body

    if(errors.length > 0) {
        res.status(400).json(errors)
    }else{

    const user = await User.create({
        firstName,
        lastName,
        email,
        password,
    })
    res.json(user)
}
})

app.post("/photo/:id", upload.single("Photo"), async (req, res) => {
    try {
        await User.update(
            {
                photo: `http://localhost:5000/${req.file.filename}${directory}`,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
            );
            res.json('Yes'),
    } catch (e) {
        res.json(e);
    }
});

app.get('/', async (req, res) => {
    const user = await User.findOne()
    res.json(user)
})

module.exports = App