require('dotenv').config();
const express = require('express');
const cors = require("cors");
require("./db/conn");

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: "GET,POST,PUT,DELETE",
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json("Welcome to the server");
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});