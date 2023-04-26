type User = {
  _id?: string;
  userId?: string;
};

export interface IRequestWithUser {
  user?: User | undefined;
  header: any;
  body: any;
}
