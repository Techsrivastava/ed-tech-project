
const {Schema, default: mongoose} = require('mongoose')


const subjectSchema = new Schema({
    subject: {
        type: String,
        required: true,
        unique: true
    }
});

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = { Subject };