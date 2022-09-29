import dotenv from 'dotenv';
import pool from '../models/database.js';

dotenv.config();

export const readAll = async (req, res, next) => {
    try {
        const data = await pool.query(`SELECT * FROM ${process.env.DB_TABLE}`);
        return data;
    } catch (err) {
        return res.status(400).json({
            error: err,
        });
    }
};

export const insert = async (req, res, next) => {
    try {
        const {name} = req.body;
        const data = await pool.query(`INSERT INTO ${process.env.DB_TABLE} (name) VALUES ('${name}') RETURNING *;`);
        return data;
    } catch (err) {
        return res.status(400).json({
            error: err,
        });
    }

}
