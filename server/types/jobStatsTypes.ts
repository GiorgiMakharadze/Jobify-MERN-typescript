import mongoose from "mongoose";

export interface Stats {
  pending?: number;
  interview?: number;
  declined?: number;
  reduce: (
    callback: (accumulator: any, currentValue: any) => any,
    initialValue?: any
  ) => any;
}

export interface MonthlyApplications {
  month: string;
  count: number;
}
