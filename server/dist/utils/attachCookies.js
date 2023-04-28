"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attachCookies = ({ res, token }) => {
    const oneDay = 1000 * 60 * 60 * 24;
    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        secure: process.env.NODE_ENV === "production",
    });
};
exports.default = attachCookies;
