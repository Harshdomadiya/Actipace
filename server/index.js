const fs = require("fs");
const https = require("https");
const path = require("path");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const HTTP_PORT = 4000;  // Regular HTTP port
const HTTPS_PORT = 8443; // Custom HTTPS port

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

const signup = require("./routes/Routes");
app.use("/api/v1", signup);

// Serve static files
app.use(express.static(path.join(__dirname, "..", "build")));

// Catch-all route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// Load SSL Certificate
const options = {
    key: fs.readFileSync("/etc/letsencrypt/live/www.actipace.com/privkey.pem"),
    cert: fs.readFileSync("/etc/letsencrypt/live/www.actipace.com/fullchain.pem"),
};

// Create HTTPS server on port 8443
https.createServer(options, app).listen(HTTPS_PORT, () => {
    console.log(`HTTPS Server running on port ${HTTPS_PORT}`);
});

// Start HTTP server on port 4000
app.listen(HTTP_PORT, () => {
    console.log(`HTTP Server running on port ${HTTP_PORT}`);
});
