"use strict";

require("dotenv").config();
const express = require("express");
const app = express();

/* JSON body parse*/
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  console.info("/hello ");
  res.send("just checking");
});
app.get("/hello", (req, res, next) => {
  console.info("/hello call success ");
  res.send("<h1 style={"color":"red"}>just checking</h1>");
});
app.listen(process.env.PORT, () => {
  console.info("Server is running on PORT:", process.env.PORT);
});
