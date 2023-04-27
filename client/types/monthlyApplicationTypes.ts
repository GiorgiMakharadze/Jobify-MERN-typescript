interface MonthlyApplications {
  _id: { year: number; month: number };
  date: string;
  count: number;
  month: string;
  year: string;
}

export interface BarChartComponentProps {
  data: MonthlyApplications[];
}
