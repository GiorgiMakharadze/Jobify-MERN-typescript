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
  _id: { year: number; month: number };
  date: string;
  count: number;
  month: string;
  year: string;
}
