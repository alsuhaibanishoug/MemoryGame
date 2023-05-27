const express = require('express');
const {body} = require('express-validator')
const router = express.Router();
const userController = require('../controllers/usersController');
const User = require('../models/user');
const auth = require('../middlewares/auth');



router.post('/register',[
    body('email')
    .isEmail()
    .withMessage('Please enter a vaild email')
    .custom(async (value) => {
        const user = await User.findOne({email: value});
        if(user){
            return Promise.reject("Email address already exsists!")
        }
    }),
    body('password')
    .trim()
    .isLength({min: 8}),
    body('name')
    .trim()
    .notEmpty()
], userController.register);

router.post('/login', userController.login);

router.get('/', auth, userController.getUser);

module.exports = router; 