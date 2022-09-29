import express from "express";
import logger from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import indexRouter from "./routes/index.js";
import argonautesRouter from "./routes/argonautes.js"


const PORT = 4001;

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/", indexRouter);
app.use("/argonautes",argonautesRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
