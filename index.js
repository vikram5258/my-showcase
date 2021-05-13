"use strict";

require("dotenv").config();
const express = require("express");
const PORT = 3000;
const app = express();

/* JSON body parse*/
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  console.info("/hello call success ");
  res.send("Welcome to Firebase Cloud Functions");
});

app.listen(process.env.PORT | PORT, () => {
  console.info("Server is running on PORT:", PORT);
});
