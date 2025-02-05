require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log("Error connecting to database", err);
    });