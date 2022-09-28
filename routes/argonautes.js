import express from "express";
const router = express.Router();

const argonautesList = [
    { name: "Michel"},
    { name: "Jean"},
    { name: "Raymond"}
]

router.get("/", async (req, res, next) => {
    const data = argonautesList;
    res.json(data);
});

export default router;