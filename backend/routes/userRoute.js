const express = require("express");
const { registerUser, loginUser, logout, forgotpassword, resetPassword, getUserDetails } = require("../controllers/userController");
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotpassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout").get(logout);
router.route("/me").get( isAuthenticatedUser,getUserDetails)
module.exports = router;