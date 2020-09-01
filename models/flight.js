const mongoose = require('mongoose')
// this is an option 
const Schema = mongoose.Schema;


let  destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN','MKE','DMV','AUS', 'SEA', 'DAL' ]
            },
    arrival: {
        type:   Date,
        }
},
{ 
    timestamp: true,
})


let flightSchema = new Schema ({ 
    airline: { 
        type: String, 
        enum: [ 'American', 'Delta', 'Southwest', 'United' ]
    }, 
    airport: { 
        type: String, 
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN','MKE','DMV','AUS', 'SEA', 'DAL' ]
    }, 
    flightNo: { 
        type: Number, 
        required: true, 
        min: 10, 
        max: 9999
    }, 
    departs: {
        type: Date,
        default: () => {
            let oneYearFromNow = new Date()
            return oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 0);
            }
        }, 
        destinations: [destinationSchema],
        }, {
            timestamps: true,
        }); 


module.exports = mongoose.model('Flight', flightSchema)