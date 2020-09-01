const Ticket = require('../models/ticket');



module.exports = {
    new: newTicket,
    // delete: deleteTic,
    create,
}

function newTicket(req, res){
    res.render('ticket/new',{
    flightID: req.params.id,
    title: 'Add ticket'
    }
    )
}

function create(req, res) {
     //create a ticket object
        let tickObj = {
            seat: req.body.seat,
            price: req.body.price,
            flight: req.params.id
        }
    const newTicket = new Ticket(tickObj);
        newticket.save(function(err){
            if(err) {
                res.render('ticket/new', {
                    flightID: req.params.id, title:'Add Ticket'
                })
                    res.redirect(`flights/${rea.params.id}`)
                }
            })
}
