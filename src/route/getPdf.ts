import { Application, Request, Response, NextFunction } from "express";
import createPdf from "../middleware/createPdf";
import path from "path";
import fs from "fs";

const getPdf = (app: Application) => {
  app.get(
    "/getpdf",
    createPdf,
    (req: Request, res: Response, next: NextFunction) => {
      const { title } = req.body;
      res
        .sendStatus(200)
        .sendFile(path.join(__dirname, "..", "file", `${title}.pdf`), (err) => {
          if (err) {
            next(err);
          }
          fs.unlinkSync(path.join(__dirname, "..", "file", `${title}.pdf`));
        });
    }
  );
};

export default getPdf;
