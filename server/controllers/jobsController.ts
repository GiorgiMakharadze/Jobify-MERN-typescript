import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Job from "../models/Job";
import { IRequestWithUser } from "../types";
import {
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
} from "../errors";
import checkPermissions from "../utils/checkPermissions";
import mongoose from "mongoose";

const createJob = async (req: IRequestWithUser, res: Response) => {
  const { position, company } = req.body;

  if (!position || !company) {
    throw new BadRequestError("Please provide all values");
  }

  req.body.createdBy = req.user?.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const getAllJobs = async (req: IRequestWithUser, res: Response) => {
  const jobs = await Job.find({ createdBy: req.user?.userId });
  res
    .status(StatusCodes.OK)
    .json({ jobs, totalJobs: jobs.length, numOfPages: 1 });
};

const updateJob = async (req: IRequestWithUser, res: Response) => {
  const { id: jobId } = req.params;
  const { company, position } = req.body;
  if (!position || !company) {
    throw new BadRequestError("Please provide all values");
  }

  const job = await Job.findOne({ _id: jobId });
  if (!job) {
    throw new NotFoundError(`No job with id: ${jobId}`);
  }

  checkPermissions(req.user, job.createdBy);

  const updateJob = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({ updateJob });
};

const deleteJob = async (req: IRequestWithUser, res: Response) => {
  const { id: jobId } = req.params;

  const job = await Job.findOne({ _id: jobId });
  if (!job) {
    throw new NotFoundError(`No job with id: ${jobId}`);
  }

  checkPermissions(req.user, job.createdBy);

  await job.remove();

  res.status(StatusCodes.OK).json({ msg: "Success! Job remove" });
};

const showStats = async (req: IRequestWithUser, res: Response) => {
  let stats = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user?.userId) } },
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);
  res.status(StatusCodes.OK).json({ stats });
};

export { createJob, getAllJobs, updateJob, deleteJob, showStats };
