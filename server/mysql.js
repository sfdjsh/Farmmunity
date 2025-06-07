const mysql = require("mysql2/promise");

let connection;

const connectionDatabase = async () => {
  if (!connection) {
    try {
      connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "!!tjems0212",
        database: "fammunity",
      });
    } catch (err) {
      console.error("mysql 연결 실패");
      throw err;
    }
  }
  return connection;
};

module.exports = connectionDatabase;
