"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const auth_1 = __importDefault(require("../middleware/auth"));
const router = (0, express_1.Router)();
router.route("/register").post(authController_1.register);
router.route("/login").post(authController_1.login);
router.route("/logout").delete(authController_1.logout);
router.route("/updateUser").patch(auth_1.default, authController_1.updateUser);
router.route("/verify-email").post(authController_1.verifyEmail);
router.route("/forgot-password").post(authController_1.forgotPassword);
router.route("/reset-password").post(authController_1.resetPassword);
exports.default = router;
