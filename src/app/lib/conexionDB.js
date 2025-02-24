import mysql from "mysql2/promise";

// Crea una conexión a la base de datos con promesas
const ConexionDB = mysql.createPool({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
  database: "localhost",
  shema: "gestor_eventos",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default ConexionDB;
