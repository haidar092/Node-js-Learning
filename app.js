const express = require("express");
const app = express();
//request to server
app.get("/", function (req, res) {
  //response to server
  res.send("<h1>Hello baby</h1>");
});
//request to server
app.get("/contact", function (req, res) {
  //response to server
  res.send("<h1>Hello contact</h1>");
});
//request to server
app.get("/about", function (req, res) {
  //response to server
  res.send("<h1>Hello about</h1>");
});
//listen for request
app.listen(8000);
