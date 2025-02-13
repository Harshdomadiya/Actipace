const path = require("path");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const https = require("https");
require("dotenv").config();
const fs = require("fs");

const PORT = process.env.PORT || 4000;

// SSL Certificate settings
const sslOptions = {
    key: fs.readFileSync("/etc/letsencrypt/live/www.actipace.com/privkey.pem"),
    cert: fs.readFileSync("/etc/letsencrypt/live/www.actipace.com/fullchain.pem"),
};

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

// Routes
const signup = require("./routes/Routes");
app.use("/api/v1", signup);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "..", "build")));

// Catch-all route to serve the React app for any unknown routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});


// Create HTTPS server
const server = https.createServer(sslOptions, app).listen(PORT, () => {
    console.log(`App is running successfully on port ${PORT}`);
});