const express = require("express");
const app = express(); //app object olindi express() function orqali
const fs = require("fs");
const mongodb = require("mongodb");

//MongoDB call
const db = require("./server").db(); // db orqali bazani chaqiramiz
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
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    res.json(data.ops[0]);
  });
});

app.get("/", (req, res) => {
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("Something went wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    (err, data) => {
      res.json({ state: "success" });
    }
  );
});

app.get("/portfolio", (req, res) => {
  res.render("portfolio", { user: user });
});

module.exports = app;
