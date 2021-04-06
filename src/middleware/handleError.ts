import { Request, Response, NextFunction } from "express";

const handleError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err) res.sendStatus(500).send("Something went wrong. Try again later.");
};

export default handleError;
