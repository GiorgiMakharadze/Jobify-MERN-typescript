import { Request, Response, NextFunction } from "express";

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const headers = req.header;
  const authorizationHeader = req.header("authorization");
  console.log(headers);
  console.log(authorizationHeader);
  next();
};

export default auth;
