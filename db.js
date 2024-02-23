import mariadb from "mariadb";
import dotenv from "dotenv";
 dotenv.config();

export const connection = await mariadb.createConnection({
  host:process.env.DB_HOST,
  port:process.env.DB_PORT,
  user:process.env.DB_USER,
  password:process.env.BD_PASS,
  database:process.env.DB_NAME,
  
});
