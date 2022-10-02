import express from "express";
const router = express.Router();
import { insert, readAll } from "../controllers/controller.js";

router.get("/", async (req, res, next) => {
    const data = await readAll(res);
    return res.json(data.rows);
});

router.post("/", async (req, res, next) => {
    const {name} = req?.body;
    const data = await insert(name, res);
    return res.json(data.rows);
});

export default router;