import { Application, Request, Response, NextFunction } from "express";
import createPdf from "../middleware/createPdf";
import path from "path";
import fs from "fs";

const getPdf = (app: Application) => {
  app.post(
    "/getpdf",
    createPdf,
    (req: Request, res: Response, next: NextFunction) => {
      const { title } = req.body;
      res.sendFile(
        path.join(__dirname, "..", "file", `${title}.pdf`),
        (err) => {
          if (err) {
            next(err);
          }
          fs.unlink(
            path.join(__dirname, "..", "file", `${title}.pdf`),
            (err) => {
              if (err) next(err);
            }
          );
        }
      );
    }
  );
};

export default getPdf;
