import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
import PdfTemplate from "../template/PdfTemplate";
import puppeteer from "puppeteer";

const createPdf = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { data, title } = req.body;

    if (!fs.existsSync(path.join(__dirname, "..", "file"))) {
      fs.mkdirSync(path.join(__dirname, "..", "file"));
    }

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.setContent(PdfTemplate(data));
    await page.emulateMediaType("screen");
    await page.pdf({
      path: path.join(__dirname, "..", "file", `${title}.pdf`),
      format: "a4",
      preferCSSPageSize: true,
      printBackground: true,
    });

    await browser.close();

    next();
  } catch (err) {
    if (err) {
      next(err);
    }
  }
};

export default createPdf;
