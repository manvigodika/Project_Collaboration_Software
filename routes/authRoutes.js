const { Router } = require("express");
const authController = require("../controllers/authController");
const {
  requireAuth,
  requireGuest,
  checkUser,
} = require("../middleware/authMiddleware");

const router = Router();

router.get("/signup", requireGuest, authController.signup_get);
router.post("/signup", requireGuest, authController.signup_post);
router.get("/login", requireGuest, authController.login_get);
router.post("/login", requireGuest, authController.login_post);
router.get("/logout", requireAuth, authController.logout_get);

module.exports = router;
