import { Application, Request, Response } from "express";
import createPdf from "../middleware/createPdf";
import path from "path";
import fs from "fs";

const getPdf = (app: Application) => {
  app.get("/getpdf", createPdf, (req: Request, res: Response) => {
    const { title } = req.body;
    res
      .sendStatus(200)
      .sendFile(path.join(__dirname, "..", "file", `${title}.pdf`), (err) => {
        if (err) {
          res.sendStatus(500);
        }
        fs.unlinkSync(path.join(__dirname, "..", "file", `${title}.pdf`));
      });
  });
};

export default getPdf;
