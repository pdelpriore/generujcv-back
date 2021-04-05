import express, { Application } from "express";
import cors from "cors";
import createPdf from "./route/createPdf";
import getPdf from "./route/getPdf";

const port = process.env.PORT || 4000;
const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

createPdf(app);
getPdf(app);

app.listen(port, () => console.log(`Server is running on ${port}`));
