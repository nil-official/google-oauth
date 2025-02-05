require('dotenv').config();
const express = require('express');
const cors = require("cors");
require("./db/conn");

const app = express();

// Routes
const authRoutes = require('./routes/authRoutes');

// CORS Middleware
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: "GET,POST,PUT,DELETE",
}));

app.use(express.json());

// Default Route
app.get("/", (req, res) => {
    res.status(200).json("Welcome to the server");
});

app.use("/auth/", authRoutes);

// 404 Route
app.all("*", (req, res) => {
    res.status(404).json(`Uri: ${req.originalUrl} not found`);
});

// Server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});