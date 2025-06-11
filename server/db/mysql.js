require("dotenv").config();
const mysql = require("mysql2/promise");

let connection;
const connectionDatabase = async () => {
  if (!connection) {
    try {
      connection = await mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
      });
    } catch (err) {
      console.error("mysql 연결 실패");
      throw err;
    }
  }
  return connection;
};

module.exports = connectionDatabase;
