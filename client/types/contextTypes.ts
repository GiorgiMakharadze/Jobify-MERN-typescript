const token = localStorage.getItem("token");

export interface IContextState {
  isLoading: boolean;
  showAlert: boolean;
  alertText: string;
  alertType: string;
  token: undefined | null | typeof token;
  user: undefined | null;
  userLocation: string;
  jobLocation: string;
  showSidebar: boolean;
  //job
  isEditing: boolean;
  editJobId: string;
  position: string;
  company: string;
  jobTypeOptions: string[];
  jobType: string;
  statusOptions: string[];
  status: string;
  jobs: object[];
  totalJobs: number;
  numOfPages: number;
  page: number;
}
