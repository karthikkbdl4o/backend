const { application } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const indexRoute = require("./routes/indexRoute");
const postsRoutes = require("./routes/postsRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

//Connect to mongo
mongoose.connect(
  "mongodb+srv://backend:backend@backend.mltorqs.mongodb.net/backend?retryWrites=true&w=majority"
);

const connection = mongoose.connection;
// Connection Failed
connection.on("error", () => console.log("Error"));
// Connection Successfull
connection.once("open", () => console.log("Connection Successful"));

app.use(express.json());

const PORT = 3000;

app.use("/posts", postsRoutes);
app.use("/users", userRoutes);
app.use("/", indexRoute);

app.use("/example", (req, res) => {
  res.json({ message: "Example" });
});

app.listen(PORT, () => {
  console.log("Started");
});
