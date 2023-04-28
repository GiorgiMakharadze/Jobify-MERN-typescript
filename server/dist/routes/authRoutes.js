"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const authController_1 = require("../controllers/authController");
const auth_1 = __importDefault(require("../middleware/auth"));
const router = (0, express_1.Router)();
const apiLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: "Too many requests from this IP address,please try again after 15 minutes",
});
router.route("/register").post(apiLimiter, authController_1.register);
router.route("/login").post(apiLimiter, authController_1.login);
router.route("/logout").get(authController_1.logoutUser);
router.route("/updateUser").patch(auth_1.default, authController_1.updateUser);
router.route("/getCurrentUser").get(auth_1.default, authController_1.getCurrentUser);
exports.default = router;
