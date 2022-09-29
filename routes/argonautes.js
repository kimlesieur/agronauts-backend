import express from "express";
const router = express.Router();
import { insert, readAll } from "../controllers/controller.js";

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
    return res.json(data.rows);
});

router.post("/", async (req, res, next) => {
    const data = await insert(req, res, next);
    return res.json(data.rows);
});

export default router;