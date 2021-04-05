import { Application, Request, Response } from "express";
import path from "path";
import fs from "fs";
import PdfTemplate from "../template/PdfTemplate";
import pdf from "html-pdf";

const createPdf = (app: Application) => {
  app.post("/createpdf", (req: Request, res: Response) => {
    const { data } = req.body;
    pdf.create(PdfTemplate(data), {}).toFile("result.pdf", (err) => {
      if (err) {
        return Promise.reject();
      }
      const currentFilePath = "./result.pdf";
      const newFilePath = path.join(__dirname, "..", "file", "result.pdf");
      fs.rename(currentFilePath, newFilePath, (err) => {
        if (err) {
          return Promise.reject();
        }
        return Promise.resolve();
      });
      return Promise.resolve();
    });
  });
};

export default createPdf;
