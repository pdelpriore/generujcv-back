import express, { Application } from "express"

const port = process.env.PORT || 4000;
const app: Application = express()

app.listen(port, () => console.log(`Server is running on ${port}`))