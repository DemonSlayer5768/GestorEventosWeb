import mysql from "mysql2/promise";

const ConexionDB = mysql.createPool({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "",
  database: "gestor_eventos",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default ConexionDB;
