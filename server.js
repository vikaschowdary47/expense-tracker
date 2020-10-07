const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

require("dotenv").config();

// routes
const expenseRoute = require("./routes/expense");

app.use(express());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// mondo db
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongo database");
  }
);
mongoose.set("useCreateIndex", true);

// route middleware
app.use("/api/expense", expenseRoute);

PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
