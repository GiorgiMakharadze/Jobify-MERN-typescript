"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const checkPermissions = (requestUser, resourceUserId) => {
    if ((requestUser === null || requestUser === void 0 ? void 0 : requestUser.userId) === (resourceUserId === null || resourceUserId === void 0 ? void 0 : resourceUserId.toString()))
        return;
    throw new errors_1.UnauthenticatedError("Not authorized to access this route");
};
exports.default = checkPermissions;
