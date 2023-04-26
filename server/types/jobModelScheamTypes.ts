import mongoose, { Document, Types } from "mongoose";

export interface IJobSchema extends Document {
  _id: string;
  company: string;
  position: string;
  status: string;
  jobType: string;
  jobLocation: string;
  createdBy?: Types.ObjectId;
}
