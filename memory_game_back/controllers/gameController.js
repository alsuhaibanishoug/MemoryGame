const Game = require('../models/game');

exports.addNewGame = async (req, res, next) => {
    try{
        if (!req.isAuth) {
            const error = new Error('Not authenticated!.')
            error.code = 401;
            throw error;
        }
        const game = new Game({
            userId: req.userId,
            moves: req.body.moves,
            time: req.body.time
        });
        await game.save();
        res.status(201).json({message: 'Game added successfully', gameId: game._id});
    }catch(err){
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}