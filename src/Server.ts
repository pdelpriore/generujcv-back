import express, { Application, Request, Response, NextFunction } from "express";
import path from "path";
import cors from "cors";
import getPdf from "./route/getPdf";
import handleError from "./middleware/handleError";

const port = process.env.PORT || 4000;
const app: Application = express();

app.use(cors({ origin: "http://generujcv.herokuapp.com" }));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req: Request, res: Response, next: NextFunction) => {
  req.url.includes("/getpdf")
    ? next()
    : res.sendFile(path.join(__dirname, "build"));
});

getPdf(app);

app.use(handleError);

app.listen(port, () => console.log("Server is running"));
