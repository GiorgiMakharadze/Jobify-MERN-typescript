import mongoose from "mongoose";

export interface Stats {
  _id: string;
  count: number;
  pending?: number;
  interview?: number;
  declined?: number;
}

export interface MonthlyApplications {
  month: string;
  count: number;
}
