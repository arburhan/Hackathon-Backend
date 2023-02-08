const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());

//routes
const challengeRoute = require('./routes/v1/challenge.route');
const userRoutes = require('./routes/v1/users.route');


app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
});

// posting to database

app.use('/api/v1/challenge', challengeRoute);
app.use('/api/v1/user', userRoutes);


module.exports = app;