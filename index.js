const mongoose = require("mongoose");
const express = require("express");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.set("view engine", "ejs");

app.use((req, res, next) => {
  console.log(req.method + req.path);
  next();
});

const petSchema = new mongoose.Schema(
    {
      name: String,
      emoji: String,
      age: Number,
      adopted: Boolean
    },
    { timestamps: true }
  );

async function startServer() {
    await mongoose.connect(
      "mongodb+srv://SE12:CSH2025@cluster0.u9yhg.mongodb.net/CSHpets?retryWrites=true&w=majority&appName=Cluster0"
    );
  
    app.listen(3000, () => {
      console.log(`Server running.`);
    });
  }
  
  startServer();