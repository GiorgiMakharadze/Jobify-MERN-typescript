import { Router } from "express";
import rateLimit from "express-rate-limit";
import {
  register,
  login,
  updateUser,
  getCurrentUser,
  logoutUser,
} from "../controllers/authController";
import authenticateUser from "../middleware/auth";

const router = Router();
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message:
    "Too many requests from this IP address,please try again after 15 minutes",
});

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);
router.route("/logout").get(logoutUser);

router.route("/updateUser").patch(authenticateUser, updateUser);
router.route("/getCurrentUser").get(authenticateUser, getCurrentUser);
export default router;
