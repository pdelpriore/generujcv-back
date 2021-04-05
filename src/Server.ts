import express, { Application } from "express";
import cors from "cors";

const port = process.env.PORT || 4000;
const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.listen(port, () => console.log(`Server is running on ${port}`));
