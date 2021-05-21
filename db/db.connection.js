const mongoose = require("mongoose");

async function initializeDbConnection() {
  try {
    await mongoose.connect(
      "mongodb+srv://vineet:dev-quiz@cluster0.y62y0.mongodb.net/dev-quiz?authSource=admin&replicaSet=atlas-qd7ylu-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",

      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    );

    console.log("connecting......");
  } catch (error) {
    console.log({ error: error });
  }
}

module.exports = { initializeDbConnection };
