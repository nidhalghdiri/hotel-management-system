const express = require("express");
const { register, login } = require("../controllers/user");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/dashboard", auth, (req, res) => {
  res.send("Welcome to dashboard Page");
});

module.exports = router;
