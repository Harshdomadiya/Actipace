const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

// Load SSL certificates
const sslOptions = {
    key: fs.readFileSync("/etc/letsencrypt/live/www.actipace.com/privkey.pem"),
    cert: fs.readFileSync("/etc/letsencrypt/live/www.actipace.com/fullchain.pem"),
};

// Middleware
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

// Serve static files from React app
app.use(express.static(path.join(__dirname, "..", "build")));

// Catch-all route for React app
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// Start HTTPS server
https.createServer(sslOptions, app).listen(443, () => {
    console.log("HTTPS Server running on port 443");
});

// Redirect HTTP to HTTPS
http.createServer((req, res) => {
    res.writeHead(301, { Location: "https://" + req.headers.host + req.url });
    res.end();
}).listen(80, () => {
    console.log("HTTP Server running on port 80 (redirecting to HTTPS)");
});
