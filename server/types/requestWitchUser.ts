export type User = {
  _id?: string;
  userId?: string;
  role?: string;
};

export interface IRequestWithUser {
  user?: User | undefined;
  _id?: string;
  userId?: string;
  role?: string;
  header: any;
  body: any;
  params: any;
  query: any;
}
