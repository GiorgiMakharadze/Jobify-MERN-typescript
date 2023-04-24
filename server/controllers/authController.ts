import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import User from "../models/User";

const register = async (req: Request, res: Response) => {
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
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
