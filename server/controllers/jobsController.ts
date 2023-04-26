import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Job from "../models/Job";
import { IRequestWithUser } from "../types";
import { BadRequestError, UnauthenticatedError } from "../errors";

const createJob = async (req: IRequestWithUser, res: Response) => {
  const { position, company } = req.body;

  if (!position || !company) {
    throw new BadRequestError("Please provide all values");
  }

  req.body.createdBy = req.user?.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const getAllJobs = async (req: Request, res: Response) => {
  res.send("getAllJobs");
};

const updateJob = async (req: Request, res: Response) => {
  res.send("updateJob");
};

const deleteJob = async (req: Request, res: Response) => {
  res.send("deleteJobs ");
};

const showStats = async (req: Request, res: Response) => {
  res.send("showStats");
};

export { createJob, getAllJobs, updateJob, deleteJob, showStats };
