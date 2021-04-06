import express, { Application } from "express";
import cors from "cors";
import getPdf from "./route/getPdf";
import handleError from "./middleware/handleError";

const port = process.env.PORT || 4000;
const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

getPdf(app);

app.use(handleError);

app.listen(port, () => console.log("Server is running"));
