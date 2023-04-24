import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (
  err: Error | any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const defaultError = {
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    msg: "Something went wrong",
  };
  res.status(defaultError.statusCode).json({ msg: err });
};

export default errorHandlerMiddleware;
