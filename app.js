const express = require('express');
const cors = require('cors');

const errHandler = require('./src/middlewares/errHandler.js');
const iqraRoute = require('./src/routes/iqra/iqra.route.js');
const mongoDBRoute = require('./src/routes/iqra/mongo.route.js');

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/iqra/book", iqraRoute)
app.use("/api/iqra/mongo", mongoDBRoute)

app.get('/', (req, res) => {
    res.send('Server is loading on webhost!');
})
app.all('*', (req, res) => {
    res.send('No routes found!');
})

//global error handler
app.use(errHandler);

module.exports = app;