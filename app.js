// Express realted code only
const express = require('express');
const morgan = require('morgan');

const app = express();

// run morgan middleware in development environment only
// Shows info about request in terminal
// add NODE_ENV=development in config.env
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world')
})

module.exports = app