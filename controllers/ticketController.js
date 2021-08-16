const Ticket = require('./../models/ticketModel');
const APIFeatures = require('./../utils/apiFeatures');

exports.getTickets = async (req, res, next) => {
    try {
        const features = new APIFeatures(Ticket.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate()
            .search();

        const tickets = await features.query;

        res.status(200).json({
            status: 'success',
            data: {
                tickets
            }
        })
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

exports.getTicket = async (req, res, next) => {
    try {
        const ticket = await Ticket.findById(req.params.id);

        if(!ticket){
            return res.status(404).json({
                success: 'fail',
                message: 'ticket not found on given id'
            })
        }

        res.status(200).json({
            status: 'success',
            data: {
                ticket
            }
        })

    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: err
        })
    }
}

exports.createTicket = async (req, res, next) => {
    try {
        const ticket = await Ticket.create(req.body);

        res.status(201).json({
            type: 'success',
            data: {
                ticket
            }
        })
    } catch (err) {
        res.status(400).json({
            type: 'fail',
            message: err
        })
    }
}

exports.deleteTicket = async (req, res, next) => {
    try {
        const ticket = await Ticket.findByIdAndDelete(req.params.id);

        if(!ticket){
            return res.status(404).json({
                success: 'fail',
                message: 'ticket not found on given id'
            })
        }

        res.status(204).json({
            status: 'success',
            data: {
                id: req.params.id
            }
        })
    } catch(err) {
        res.status(500).json({
            status: 'fail',
            message: err
        })
    }
}

exports.updateTicket = async (req, res, next) => {
    try {
        const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if(!ticket){
            return res.status(404).json({
                success: 'fail',
                message: 'ticket not found on given id'
            })
        }

        res.status(200).json({
            status: 'success',
            data: {
                ticket
            }
        })
    } catch(err) {
        res.status(500).json({
            status: 'fail',
            message: err
        })
    }
}