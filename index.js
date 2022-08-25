const express = require("express");
const postsRoutes = require("./routes/postsRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

const PORT = 3000;

app.use("/posts", postsRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log("Started");
});
