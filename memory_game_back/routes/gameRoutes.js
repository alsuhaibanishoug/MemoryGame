const express = require('express');
const {body} = require('express-validator')
const router = express.Router();
const gameController = require('../controllers/gameController');
const auth = require('../middlewares/auth');

router.post('/add',auth ,gameController.addNewGame);

module.exports = router;