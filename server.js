const express = require('express')
const mongoose = require('mongoose')
const config = require('./config');
const app = express();

async function connect() {
    try {
        await mongoose.connect(config.mongoURL, {
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}



connect();

app.listen(8000,() => {console.log("Server started on port 8000")})

