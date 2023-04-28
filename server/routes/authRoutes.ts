import { Router } from "express";
import { register, login, updateUser } from "../controllers/authController";
import authenticateUser from "../middleware/auth";

const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUser").patch(authenticateUser, updateUser);

export default router;
