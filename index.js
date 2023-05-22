const express = require("express");
const app = express();
const port = 3000;

const userRouter = require("./routes/userRouter");
const loggerMiddleware = require("./middleware/loggerMiddleware");

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(loggerMiddleware);
app.use("/users", userRouter);

// app.use("*", (req, res) => res.json({ success: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
