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
exports.showStats = exports.deleteJob = exports.updateJob = exports.getAllJobs = exports.createJob = void 0;
const http_status_codes_1 = require("http-status-codes");
const Job_1 = __importDefault(require("../models/Job"));
const errors_1 = require("../errors");
const checkPermissions_1 = __importDefault(require("../utils/checkPermissions"));
const createJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { position, company } = req.body;
    if (!position || !company) {
        throw new errors_1.BadRequestError("Please provide all values");
    }
    req.body.createdBy = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId;
    const job = yield Job_1.default.create(req.body);
    res.status(http_status_codes_1.StatusCodes.CREATED).json({ job });
});
exports.createJob = createJob;
const getAllJobs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const jobs = yield Job_1.default.find({ createdBy: (_b = req.user) === null || _b === void 0 ? void 0 : _b.userId });
    res
        .status(http_status_codes_1.StatusCodes.OK)
        .json({ jobs, totalJobs: jobs.length, numOfPages: 1 });
});
exports.getAllJobs = getAllJobs;
const updateJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: jobId } = req.params;
    const { company, position } = req.body;
    if (!position || !company) {
        throw new errors_1.BadRequestError("Please provide all values");
    }
    const job = yield Job_1.default.findOne({ _id: jobId });
    if (!job) {
        throw new errors_1.NotFoundError(`No job with id: ${jobId}`);
    }
    (0, checkPermissions_1.default)(req.user, job.createdBy);
    const updateJob = yield Job_1.default.findOneAndUpdate({ _id: jobId }, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(http_status_codes_1.StatusCodes.OK).json({ updateJob });
});
exports.updateJob = updateJob;
const deleteJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: jobId } = req.params;
    const job = yield Job_1.default.findOne({ _id: jobId });
    if (!job) {
        throw new errors_1.NotFoundError(`No job with id: ${jobId}`);
    }
    (0, checkPermissions_1.default)(req.user, job.createdBy);
    yield job.remove();
    res.status(http_status_codes_1.StatusCodes.OK).json({ msg: "Success! Job remove" });
});
exports.deleteJob = deleteJob;
const showStats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("showStats");
});
exports.showStats = showStats;
