import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const conexao = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "api_produtos_fornecedores",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default conexao;
