var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    delete: deleteFlight,
    show,
};

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        flight && Ticket.find({"flight": flight._id}, function(err, tickets){
            res.render('flights/show', {
                title: "Flight details",
                flight,
                tickets
            })
        })
    })
}

function deleteFlight(req, res) {
    Flight.deleteOne({'_id': req.params.id}, function(err, flight){
        res.redirect('/flights')
    });
};

function create(req, res) {
    var flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new');   
        res.redirect(`/flights/${flight._id}`)
    });
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {flights, title: "Mongoose Flights"})
    })
};

function newFlight(req, res) {
    res.render('flights/new', {title: "Mongoose Flights"})
};