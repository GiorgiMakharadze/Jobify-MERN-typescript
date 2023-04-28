import { Router } from "express";
import {
  register,
  login,
  updateUser,
  getCurrentUser,
  logoutUser,
} from "../controllers/authController";
import authenticateUser from "../middleware/auth";

const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logoutUser);
router.route("/updateUser").patch(authenticateUser, updateUser);
router.route("/getCurrentUser").get(authenticateUser, getCurrentUser);
export default router;
