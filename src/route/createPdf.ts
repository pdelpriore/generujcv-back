import { Application, Request, Response } from "express";
import PdfTemplate from "../template/PdfTemplate";
import path from "path";
import puppeteer from "puppeteer";

const createPdf = (app: Application) => {
  app.post("/createpdf", async (req: Request, res: Response) => {
    try {
      const { data } = req.body;

      const browser = await puppeteer.launch({ headless: true });

      const page = await browser.newPage();
      await page.setContent(PdfTemplate(data));
      await page.emulateMediaType("print");
      await page.pdf({
        path: path.join(__dirname, "..", "file", "result.pdf"),
        format: "a4",
        preferCSSPageSize: true,
        printBackground: true,
      });

      await browser.close();

      res.sendStatus(200);
    } catch (err) {
      if (err) {
        res.sendStatus(400);
      }
    }
  });
};

export default createPdf;
