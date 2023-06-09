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
const moment_1 = __importDefault(require("moment"));
const Job_1 = __importDefault(require("../models/Job"));
const errors_1 = require("../errors");
const checkPermissions_1 = __importDefault(require("../utils/checkPermissions"));
const mongoose_1 = __importDefault(require("mongoose"));
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
    const { search, status, jobType, sort } = req.query;
    const queryObject = {
        createdBy: (_b = req.user) === null || _b === void 0 ? void 0 : _b.userId,
    };
    if (status && status !== "all") {
        queryObject.status = status;
    }
    if (jobType && jobType !== "all") {
        queryObject.jobType = jobType;
    }
    if (search) {
        queryObject.position = { $regex: search, $options: "i" };
    }
    let result = Job_1.default.find(queryObject);
    if (sort === "latest") {
        result = result.sort("-createdAt");
    }
    if (sort === "oldest") {
        result = result.sort("createdAt");
    }
    if (sort === "a-z") {
        result = result.sort("position");
    }
    if (sort === "z-a") {
        result = result.sort("-position");
    }
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    result = result.skip(skip).limit(limit);
    const jobs = yield result;
    const totalJobs = yield Job_1.default.countDocuments(queryObject);
    const numOfPages = Math.ceil(totalJobs / limit);
    res.status(http_status_codes_1.StatusCodes.OK).json({ jobs, totalJobs, numOfPages });
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
    res.status(http_status_codes_1.StatusCodes.OK).json({ msg: "Success! Job removed" });
});
exports.deleteJob = deleteJob;
const showStats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
    let stats = yield Job_1.default.aggregate([
        { $match: { createdBy: new mongoose_1.default.Types.ObjectId((_c = req.user) === null || _c === void 0 ? void 0 : _c.userId) } },
        { $group: { _id: "$status", count: { $sum: 1 } } },
    ]);
    stats = stats.reduce((acc, curr) => {
        const { _id: title, count } = curr;
        acc[title] = count;
        return acc;
    }, {});
    const defaultStats = {
        pending: stats.pending || 0,
        interview: stats.interview || 0,
        declined: stats.declined || 0,
    };
    let monthlyApplications = yield Job_1.default.aggregate([
        { $match: { createdBy: new mongoose_1.default.Types.ObjectId((_d = req.user) === null || _d === void 0 ? void 0 : _d.userId) } },
        {
            $group: {
                _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
                count: { $sum: 1 },
            },
        },
        { $sort: { "_id.year": -1, "_id.month": -1 } },
        { $limit: 6 },
    ]);
    monthlyApplications = monthlyApplications
        .map((item) => {
        const { _id: { year, month }, count, } = item;
        const date = (0, moment_1.default)()
            .month(month - 1)
            .year(year)
            .format("MMM Y");
        return { date, count };
    })
        .reverse();
    res.status(http_status_codes_1.StatusCodes.OK).json({ defaultStats, monthlyApplications });
});
exports.showStats = showStats;
