type User = {
  userId?: string;
  _id?: string;
};

export interface IRequestWithUser {
  user?: User | undefined;
  header: any;
}
