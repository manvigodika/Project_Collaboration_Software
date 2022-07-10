const express = require("express");
const { requireAuth } = require("../middleware/authMiddleware");
const { getUser, getUsers } = require("../middleware/user");
const router = express.Router();

router.get("/dashboard", requireAuth, getUser, getUsers, (req, res) =>
  res.render("dashboard")
);
router.get("/tasks", requireAuth, getUser, (req, res) =>
  res.render("view-tasks")
);

router.get("/create/project", requireAuth, getUser, getUsers, (req, res) => {
  res.render("create-project");
});

module.exports = router;
