import { Application, Request, Response } from "express";
import path from "path";
import fs from "fs";

const getPdf = (app: Application) => {
  app.get("/getpdf", (req: Request, res: Response) => {
    res
      .sendStatus(200)
      .sendFile(path.join(__dirname, "..", "file", "result.pdf"), (err) => {
        if (err) {
          res.sendStatus(400);
        }
        fs.unlinkSync(path.join(__dirname, "..", "file", "result.pdf"));
      });
  });
};

export default getPdf;
