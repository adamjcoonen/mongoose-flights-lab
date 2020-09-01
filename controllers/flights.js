const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,  
    new: newFlight,
    create,
    delete: deleteOne,
    edit,
    show,
    update
    }


 function getDefaultDate() {
    let testFlight = new Flight();
    let dt = testFlight.departs
    let destDate = dt.toISOString().slice(0, 16);
    return destDate;
 }
 function index(req,res){
    Flight.find({}, function(err, flights){
    res.render('flights/index', { flights, title: 'Flights' })
    })
}
    function show(req, res) {
        Flight.findById(req.params.id, function(err, flight){
            Ticket.find({flight: flight._id}, function(err, tickets){
                res.render('flights/show', { flight, tickets ,title: 'Details', dest: getDefaultDate()})
            })
            
        })
    }

function edit(req, res){
    Flight.findById(req.params.id, function(err, flight){
        // This will take the user to the edit feild and 
        if(err) {
            res.redirect(`/flights`)
        }
        res.render('flights/edit', { flight, title: 'Edit Flight', flightDeparts: flight.departs.toISOString().slice(0, 16) } )
    })
}

function deleteOne(req, res) {
    Flight.findByIdAndDelete(req.params.id, function(err) {
            res.redirect('/flights');
        });
    };

    



function newFlight(req, res){
    res.render('flights/new',{title: 'New Flight', destDate: getDefaultDate()})
}
function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
      // one way to handle errors
      if (err) 
      return res.render('flights/new',{title: 'New Flight', destDate: getDefaultDate() });
      console.log(flight);
      
    //   res.redirect('/flights');
        res.redirect(`flights/${flight._id}`)
    });
}

function update(req, res){
    Flight.findByIdAndUpdate(req.params.id, req.body, function(err, flight){
        if(err) {
            console.log(err)
            res.render('flights/edit', { flight, title: 'Edit Flight', flightDeparts: flight.departs.toISOString().slice(0, 16)})
    }
        res.redirect('/flights')
    })
}

