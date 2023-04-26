"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.resetPassword = exports.logout = exports.forgotPassword = exports.login = exports.verifyEmail = exports.register = void 0;
const http_status_codes_1 = require("http-status-codes");
const User_1 = __importDefault(require("../models/User"));
const errors_1 = require("../errors");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        throw new errors_1.BadRequestError("Please provide all values");
    }
    const userAlreadyExists = yield User_1.default.findOne({ email });
    if (userAlreadyExists) {
        throw new errors_1.BadRequestError("Email already in use");
    }
    const user = yield User_1.default.create({ name, email, password });
    const token = user.createJWT();
    res.status(http_status_codes_1.StatusCodes.CREATED).json({
        user: {
            email: user.email,
            name: user.name,
            lastName: user.lastName,
            location: user.location,
        },
        token,
    });
});
exports.register = register;
const verifyEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("verifyEmail");
});
exports.verifyEmail = verifyEmail;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new errors_1.BadRequestError("Please provide all values");
    }
    const user = yield User_1.default.findOne({ email }).select("+password");
    if (!user) {
        throw new errors_1.UnauthenticatedError("Invalid Credentials");
    }
    const isPasswordCorrect = yield user.comparePassword(password);
    if (!isPasswordCorrect) {
        throw new errors_1.UnauthenticatedError("Invalid Credentials");
    }
    const token = user.createJWT();
    user.password = undefined;
    res.status(http_status_codes_1.StatusCodes.OK).json({ user, token, location: user.location });
});
exports.login = login;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("logout user");
});
exports.logout = logout;
const forgotPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("forgotPassword user");
});
exports.forgotPassword = forgotPassword;
const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("resetPassword user");
});
exports.resetPassword = resetPassword;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { email, name, location, lastName } = req.body;
    if (!email || !name || !lastName || !location) {
        throw new errors_1.BadRequestError("Please provide all values");
    }
    const user = yield User_1.default.findOne({ _id: (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId });
    if (!user) {
        throw new errors_1.NotFoundError("User not found");
    }
    user.email = email;
    user.name = name;
    user.lastName = lastName;
    user.location = location;
    yield (user === null || user === void 0 ? void 0 : user.save());
    const token = user === null || user === void 0 ? void 0 : user.createJWT();
    res.status(http_status_codes_1.StatusCodes.OK).json({ user, token, location: user.location });
});
exports.updateUser = updateUser;
