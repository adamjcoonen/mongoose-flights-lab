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
        const tickObj = {
            flight: req.params.id,
            seat: req.body.seat,
            price: req.body.price,
            
        }
    const newTicket = new Ticket(tickObj);
        newTicket.save(function(err){
            if(err) {
                res.render('ticket/new', {
                    flightID: req.params.id, title:'Add Ticket'
                })
            }else{
                console.log(tickObj)
                    res.redirect(`/flights/${req.params.id}`)
                }
            })
}
