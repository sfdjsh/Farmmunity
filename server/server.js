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

// app.get("/vegetable/name", async (req, res) => {
//   try {
//     const api = await fetch("https://www.kamis.or.kr/service/price/xml.do?action=dailyPriceByCategoryList&p_product_cls_code=02&p_country_code=1101&p_regday=2015-10-01&p_convert_kg_yn=N&p_item_category_code=400&p_cert_key=111&p_cert_id=222&p_returntype=json")
//     const data = await api.json();
//     const crops = [...new Set(data.data.item.map(name => name.item_name ))]
//     console.log(crops)
//     res.json(data)
//   } catch (err) {
//     console.error(err);
//   }
// });

app.listen(3000, (req, res) => {
  console.log("Server Running..");
});
