const express = require("express");
const path = require("path");

const bodyParser = require("body-parser");
const rootDir = require("./util/path");
const sequelize = require("./util/database");
const userRoutes = require("./routes/user");
const User = require("./models/User");
const app = express();
var cors = require("cors");
app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(userRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "index.html"));
});
sequelize
  .sync()
  .then((result) => {
    console.log("result");
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
