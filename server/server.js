const express = require("express");
const cors = require("cors");
const connectDatabase = require("./mysql.js");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req, res) => {
  try {
    const connection = await connectDatabase();
    const [rows] = await connection.query("SELECT * FROM crops");
    if (rows.length === 0) {
      res.json({ data: null });
    } else {
      res.json({ data: rows });
    }
  } catch (err) {
    console.error("데이터 조회 오류:", err);
    res.status(500).send("서버에서 오류가 발생했습니다.");
  }
});

app.listen(3000, (req, res) => {
  console.log("Server Running..");
});
