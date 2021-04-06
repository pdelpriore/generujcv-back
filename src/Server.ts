import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
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

getPdf(app);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err) res.sendStatus(500).send("Something went wrong. Try again later.");
});

app.listen(port, () => console.log(`Server is running on ${port}`));
