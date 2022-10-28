const express = require("express");
const {
  allAccess,
  userBoard,
  moderatorBoard,
  adminBoard,
} = require("../controllers/board");
const { register, login } = require("../controllers/user");
const {
  auth,
  isModerator,
  isAdmin,
  checkRolesExisted,
} = require("../middleware/auth");
const router = express.Router();

router.post("/api/register", [checkRolesExisted], register);
router.post("/api/login", login);

router.get("/api/test/all", allAccess);
router.get("/api/test/user", [auth], userBoard);
router.get("/api/test/mod", [auth, isModerator], moderatorBoard);
router.get("/api/test/admin", [auth, isAdmin], adminBoard);

router.get("/api/profile", (req, res) => {
  console.log(req.query);
  res.send("Welcome to Profile Page");
});

module.exports = router;
