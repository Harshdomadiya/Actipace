const fs = require("fs");
const https = require("https");
const path = require("path");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const HTTP_PORT = 4000;
const HTTPS_PORT = 443;

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

// Catch-all route to serve the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// Load SSL Certificates
const options = {
    key: fs.readFileSync("/etc/letsencrypt/live/www.actipace.com/privkey.pem"),
    cert: fs.readFileSync("/etc/letsencrypt/live/www.actipace.com/fullchain.pem"),
};

// Start HTTPS server
https.createServer(options, app).listen(HTTPS_PORT, () => {
    console.log(`HTTPS Server running on port ${HTTPS_PORT}`);
});

// Optional: Redirect HTTP to HTTPS
const httpApp = express();
httpApp.use((req, res) => {
    res.redirect(`https://${req.headers.host}${req.url}`);
});
httpApp.listen(HTTP_PORT, () => {
    console.log(`HTTP Server running on port ${HTTP_PORT}, redirecting to HTTPS`);
});
