const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();

const PlanetRoutes = require("./routes/PlanetRoutes")

const app = express();

app.use(express.urlencoded({ extended: true }))

app.get("/health", (req, res) => {
    res.status(200).send("APP is UP and Running");
});

app.get("/", (request, response) => {
    response.send(200).send("APP is UP and Running");
});

app.use('/api', PlanetRoutes)

require('./config/db');

const port = 8000;

app.listen(port, () => {
    console.log(`SERVER STARTED AT ${port}`)
})
