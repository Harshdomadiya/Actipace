const path = require("path");
const express = require("express");
const https = require("https");
const fs = require("fs");
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
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// Start HTTPS server
https.createServer(sslOptions, app).listen(PORT, () => {
    console.log("HTTPS server running on port", PORT);
});
