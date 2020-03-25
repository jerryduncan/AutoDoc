"use strict";

const express = require("express");
const app = express();

const cors = require("cors");

const middleware = require("./middleware");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



app.use('/api', require('./routes/api'));



const PORT = 6000;

app.listen(PORT);
console.log("api running on port " + PORT + ": ");
