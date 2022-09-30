import dotenv from 'dotenv';
import * as pg from 'pg';
const {Pool} = pg.default;

dotenv.config();

const isProduction = process.env.PRODUCTION === 'true';

const createConnection = (boolean) => {
  if(boolean){
    const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
    const ssl = { rejectUnauthorized: false };
    return {connectionString, ssl};
  } else {
    const connectionString = `postgresql://${process.env.LOCAL_USER}:${process.env.LOCAL_PASSWORD}@${process.env.LOCAL_HOST}:${process.env.LOCAL_PORT}/${process.env.LOCAL_DATABASE}`;
    const ssl = false;
    return {connectionString, ssl};
  }
}

const {connectionString, ssl} = createConnection(isProduction);
console.log(connectionString);
console.log(ssl);

const pool = new Pool({
  connectionString: connectionString,
  ssl: ssl,
})

export default pool;