const connectDatabase = require("./mysql.js");

const findCropsName = async () => {
  const connection = await connectDatabase();
  const [rows] = await connection.query("SELECT (name) From crops");
  return rows;
};

const selectedCropInfo = async (name) => {
  const connection = await connectDatabase();
  const [rows] = await connection.query(
    "SELECT name, image From crops WHERE name = ?",
    [name]
  );
  return rows;
};

module.exports = { findCropsName, selectedCropInfo };
