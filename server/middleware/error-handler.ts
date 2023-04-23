import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (
  err: Error | any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: "there was an error" });
};

export default errorHandlerMiddleware;
