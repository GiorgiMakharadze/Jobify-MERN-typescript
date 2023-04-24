import { Router } from "express";
import {
  register,
  verifyEmail,
  login,
  forgotPassword,
  logout,
  resetPassword,
  updateUser,
} from "../controllers/authController";

const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").delete(logout);
router.route("/update-user").patch(updateUser);
router.route("/verify-email").post(verifyEmail);
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password").post(resetPassword);

export default router;
