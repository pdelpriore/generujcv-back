import { Application, Request, Response } from "express";
import path from "path";
import fs from "fs";

const getPdf = (app: Application) => {
  app.get("/getpdf", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "..", "file", "result.pdf"), (err) => {
      if (err) {
        return Promise.reject();
      }
      fs.unlinkSync(path.join(__dirname, "..", "file", "result.pdf"));
      return Promise.resolve();
    });
  });
};

export default getPdf;
