const express = require("express");
const app = express();
const port =process.env.PORT || 8000;
const cors = require("cors");
require("dotenv").config();
const { initializeDbConnection } = require("./db/db.connection");
app.use(express.json());
const quiz = require("./routes/quiz.router");
const { Question } = require("./model/question.model");

app.use(cors());

initializeDbConnection();

app.get("/", async (req, res) => {
  res.send("Hello World!");
});

app.use("/quiz", quiz);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
