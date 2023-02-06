const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());

//routes
const challengeRoute = require('./routes/v1/challenge.route');


app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
});

// posting to database

app.use('/api/v1/challenge', challengeRoute)


module.exports = app;