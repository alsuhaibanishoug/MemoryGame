const User = require('../models/user');
const Game = require('../models/game');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error = new Error('Validation faild!.');
            error.statusCode = 422;
            throw error
        }
        const encPassword = await bcrypt.hash(req.body.password, 12);
        req.body.password = encPassword;
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message: 'User created successfully.', userId: user._id });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}

exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            const error = new Error('No user found with this Email!.');
            error.statusCode = 404;
            throw error
        }
        const isEqual = await bcrypt.compare(req.body.password, user.password);
        if (!isEqual) {
            const error = new Error('Wrong password.');
            error.statusCode = 401;
            throw error
        }
        const token = jwt.sign({
            id: user._id.toString(),
            email: user.email
        }, process.env.JWTSECRET);
        res.status(200).json({ id: user._id, token: token });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}

exports.getUser = async (req, res, next) => {
    if (!req.isAuth) {
        const error = new Error('Not authenticated!.')
        error.code = 401;
        throw error;
    }

    const user = await User.findById(req.userId);
    if (!user) {
        const error = new Error('Invalid user.');
        error.code = 401;
        throw error;
    }

    const games = await Game.find({userId: req.userId}).sort({time: 1}).limit(3);
    res.status(200).json({user: user, games: games || []});
}