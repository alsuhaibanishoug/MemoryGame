const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    moves: {
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('games', gameSchema);