const path = require("path")
const express = require("express")
const app = express();
const coockiePaser = require("cookie-parser")
const cors = require("cors")
const dotenv = require("dotenv")
require("dotenv").config();


const PORT = process.env.PORT || 4000



app.use(express.json());
app.use(coockiePaser());
app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true,
    })
)

const signup = require("./routes/Routes");

app.use("/api/v1",signup);

app.listen(PORT,()=>{
    console.log("app is running successfully",PORT)
})

app.get("/",(req,res)=>{
    res.send(`<h1>this is home page</h1>`)
})