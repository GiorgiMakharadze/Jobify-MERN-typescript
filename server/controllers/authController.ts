import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import User from "../models/User";
import { BadRequestError } from "../errors";

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
  res.status(StatusCodes.CREATED).json({ name, email, password });
};

const verifyEmail = async (req: Request, res: Response) => {
  res.send("verifyEmail");
};

const login = async (req: Request, res: Response) => {
  res.send("login user");
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

const updateUser = async (req: Request, res: Response) => {
  res.send("updateUser");
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
