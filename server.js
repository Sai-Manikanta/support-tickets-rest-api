require('dotenv').config({ path: './config.env' });
const mongoose = require('mongoose');
const app = require('./app');

// For unhandles syncronous errors
process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});
  
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD);
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
 .then(() => console.log('Connected to Database'))
 .catch(err => console.log(err))

const port = process.env.PORT || 9000;
const server = app.listen(port, () => {
    console.log(`Api listening on http://localhost:${port}`)
});

// For unhandles asyncronous errors
process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION! Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
});