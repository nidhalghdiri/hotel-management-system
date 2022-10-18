const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database Connected Successfully.");
  })
  .catch(() => {
    console.log("Error Connecting to Database!");
  });

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running in PORT : ${PORT} `);
});
