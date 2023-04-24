"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
    const defaultError = {
        statusCode: http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR,
        msg: "Something went wrong",
    };
    res.status(defaultError.statusCode).json({ msg: err });
};
exports.default = errorHandlerMiddleware;
