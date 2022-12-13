const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const cors = require("cors");
const { getToDos, saveToDo, updateToDo, deleteToDo } = require("./controllers/toDoController");
require("dotenv").config({
  path: "./config.env",
});
const PORT = process.env.PORT || 5000;

const db = process.env.ATLAS_URI;
mongoose
  .connect(db)
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => {
    console.log(err);
  });

console.log(db);


app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());

app.get("/", getToDos);
app.post("/save", saveToDo);
app.post("/update", updateToDo);
app.post("/delete", deleteToDo);

app.get("/api", (req, res) => {
  res.json({
    Message: "I love my country, Kenya",
  });
});

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
