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
router.route("/verify-email").post(verifyEmail);
router.route("/login").post(login);
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password").post(resetPassword);
router.route("/update-user").patch(updateUser);
router.route("/logout").delete(logout);

export default router;
