import { Document } from "mongoose";

export interface IUserSchema extends Document {
  _id: string;
  name: string;
  email: {
    type: string;
    validate: {
      validator: (value: string) => boolean;
      message: string;
    };
  };
  password: string;
  lastName: string;
  location: string;
  createJWT: () => string;
}
