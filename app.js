// Express realted code only
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const ticketRouter = require('./routes/ticketRoutes');

const app = express();

app.use(cors());

// run morgan middleware in development environment only
// Shows info about request in terminal
// add NODE_ENV=development in config.env
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/tickets', ticketRouter);

app.all('*', (req, res) => {
    res.status(404).send(`Can't find ${req.originalUrl} on this server!`)
});
  
module.exports = app