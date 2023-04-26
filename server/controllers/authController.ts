import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import User from "../models/User";
import { IRequestWithUser } from "../types/requestWitchUser";
import {
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
} from "../errors";

const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values");
  }

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email already in use");
  }

  const user = await User.create({ name, email, password });

  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      name: user.name,
      lastName: user.lastName,
      location: user.location,
    },
    token,
  });
};

const verifyEmail = async (req: Request, res: Response) => {
  res.send("verifyEmail");
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

const logout = async (req: Request, res: Response) => {
  res.send("logout user");
};

const forgotPassword = async (req: Request, res: Response) => {
  res.send("forgotPassword user");
};

const resetPassword = async (req: Request, res: Response) => {
  res.send("resetPassword user");
};

const updateUser = async (req: IRequestWithUser, res: Response) => {
  const { email, name, location, lastName } = req.body;
  if (!email || !name || !lastName || !location) {
    throw new BadRequestError("Please provide all values");
  }
  const user = await User.findOne({ _id: req.user?.userId });

  if (!user) {
    throw new NotFoundError("User not found");
  }

  user.email = email;
  user.name = name;
  user.lastName = lastName;
  user.location = location;

  await user?.save();

  const token = user?.createJWT();

  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

export {
  register,
  verifyEmail,
  login,
  forgotPassword,
  logout,
  resetPassword,
  updateUser,
};
