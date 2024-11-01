const express = require('express');
const cors = require('cors');

const errHandler = require('./src/middlewares/errHandler.js');
const iqraRoute = require('./src/routes/iqra/iqra.route.js');

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/iqra/book", iqraRoute)

app.get('/', (req, res) => {
    res.send('Server is loading on webhost!');
})
app.all('*', (req, res) => {
    res.send('No routes found!');
})

//global error handler
app.use(errHandler);

module.exports = app;