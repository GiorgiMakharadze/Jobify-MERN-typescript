type User = {
  _id?: string;
  userId?: string;
  // email?: string;
  // name?: string;
  // lastName?: string;
  // location?: string;
};

export interface IRequestWithUser {
  user?: User | undefined;
  header: any;
  body: any;
}
