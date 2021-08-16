const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: [true, 'Subject is required']
    },
    posted_date: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: String,
        enum: ['open', 'replied', 'closed', 'reopened']
    },
    message: {
        type: String
    },
    reply: {
        type: String
    }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket