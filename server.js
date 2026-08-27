const express = require("express");
const app = express(); //app object olindi express() function orqali
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
  if (err) {
    console.log("Error", err);
  } else {
    user = JSON.parse(data);
  }
});
//1 Entry code. Express ga kirib kelayotgan malumotlarga bogliq kodlar yoziladi
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to give access to data from 'form'

//2 Session
//3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing code
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "Success" });
  //res.send("Success")
});

app.get("/", (req, res) => {
  res.render("purchase");
});

app.get("/portfolio", (req, res) => {
  res.render("portfolio", { user: user });
});

const server = http.createServer(app);
let PORT = 3030;
server.listen(PORT, function () {
  console.log(`Port: ${PORT} is running successfully on server`);
});
