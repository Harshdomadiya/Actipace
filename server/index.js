const path = require("path");
const express = require("express");
const fs = require("fs");
const https = require("https");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 4000;
const SSL_PORT = 443; // Standard HTTPS port

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

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "..", "build")));

// Catch-all route to serve the React app for any unknown routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// Load SSL Certificates
const options = {
    key: fs.readFileSync("/etc/letsencrypt/live/www.actipace.com/privkey.pem"),
    cert: fs.readFileSync("/etc/letsencrypt/live/www.actipace.com/fullchain.pem"),
};

// Create HTTPS server
https.createServer(options, app).listen(SSL_PORT, () => {
    console.log(`HTTPS Server running on port ${SSL_PORT}`);
});

// Optionally, redirect HTTP to HTTPS
const httpApp = express();
httpApp.use((req, res) => {
    res.redirect(`https://${req.headers.host}${req.url}`);
});
httpApp.listen(80, () => {
    console.log("HTTP Server running on port 80 and redirecting to HTTPS");
});
