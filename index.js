const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

const userRouter = require("./routes/userRouter");
const loggerMiddleware = require("./middleware/loggerMiddleware");

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.json());

app.use(loggerMiddleware);
app.use("/users", userRouter);

// app.use("*", (req, res) => res.json({ success: true }));


// Mongo DB Connection
async function dbConnect () {

  mongoose.connect('mongodb://localhost:27017/powerranger');

  mongoose.connection.on("connected", () => {
    console.log("Dabase Conntected");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    })
  });

  mongoose.connection.on("error", () => {
    console.log("Database Error");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database Disconnected");
  });

  // process.on("SIGINT", () => {
  //   console.log("Node Process End");
  //   mongoose.connection.close();
  // });

}

dbConnect();
