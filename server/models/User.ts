import mongoose, { Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { IUserSchema } from "../types/";

const UserSchema = new Schema<IUserSchema>({
  name: {
    type: String,
    required: [true, "Please provide name "],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please provide email "],
    validate: {
      validator: validator.isEmail,
      message: "Please provide  valid email",
    },
  },
  password: {
    type: String,
    required: [true, "Please provide password "],
    minlength: 6,
    select: false,
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: 20,
    default: "lastName",
  },
  location: {
    type: String,
    trim: true,
    maxlength: 20,
    default: "my city",
  },
});

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_LIFETIME!,
  });
};

export default mongoose.model<IUserSchema>("User", UserSchema);
