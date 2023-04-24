import { Request, Response } from "express";

const createJob = async (req: Request, res: Response) => {
  res.send("createJob");
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
