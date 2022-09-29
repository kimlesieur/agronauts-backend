import express from "express";
const router = express.Router();
import { readAll } from "../controllers/controller.js";

//TODO : local test data
/*
const argonautesList = [
    { name: "Michel"},
    { name: "Jean"},
    { name: "Raymond"}
]
*/

router.get("/", async (req, res, next) => {
    const data = await readAll(req, res, next);
    console.log(data);
    res.json(data.rows);
});

export default router;