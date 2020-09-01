const mongoose = require('mongoose');
// this is an option 
const Schema = mongoose.Schema;

const tickSchema = new Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/
            },
    price: {
        type:   Number,
        min: 0
    },
    flight: {
        type: Schema.Types.ObjectId,
        ref: 'flight'
    },
},
{
    timestamps: true
})


module.exports = mongoose.model('Ticket', tickSchema);