import dotenv from 'dotenv';
import pool from '../models/database.js';

dotenv.config();

export const readAll = async () => {

        const data = await pool.query(`SELECT * FROM ${process.env.DATABASE_TABLE}`);
        return data;

    /*
    try {
        const data = await pool.query(`SELECT * FROM ${process.env.DATABASE_TABLE}`);
        return data.rows;
    } catch (err) {
        return res.status(400).json({
            error: err,
        });
    }
    */
};

export const insert = async (name, res) => {

    try {
        const data = await pool.query(`INSERT INTO ${process.env.DATABASE_TABLE} (name) VALUES ('${name}') RETURNING *`);
        return data;
    } catch (err) {
        return res.status(400).json({
            error: err,
        });
    }

}
