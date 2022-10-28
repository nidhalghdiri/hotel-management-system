const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");
const path = require("path");
if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv");
  dotenv.config();
}

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "frontend/build")));
// Setup and require Routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

// Connection and Inialize Database
require("./startup/db")();
require("./startup/prod")(app);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "frontend/build/index.html"));
// });
app.get("/*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "frontend/build/index.html"),
    (err) => err && res.status(500).send(err)
  );
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running in PORT : ${PORT} `);
});
