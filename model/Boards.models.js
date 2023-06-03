
const {Schema, default: mongoose} = require('mongoose')


const boardSchema = new Schema({
    board: {
        type: String,
        required: true,
        unique: true
    }
});

const Board = mongoose.model('Board', boardSchema);

module.exports = { Board };