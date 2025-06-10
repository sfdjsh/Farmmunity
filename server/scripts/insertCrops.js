const connectDatabase = require("../db/mysql.js");
const cropsData = require("../data/cropsImage.json");

(async () => {
  const cropsImage = cropsData.cropsImage;
  try {
    const fruitAPI = await fetch(
      "https://www.kamis.or.kr/service/price/xml.do?action=dailyPriceByCategoryList&p_product_cls_code=02&p_country_code=1101&p_regday=2015-10-01&p_convert_kg_yn=N&p_item_category_code=400&p_cert_key=111&p_cert_id=222&p_returntype=json"
    );
    const vegetableAPI = await fetch(
      "https://www.kamis.or.kr/service/price/xml.do?action=dailyPriceByCategoryList&p_product_cls_code=02&p_country_code=1101&p_regday=2015-10-01&p_convert_kg_yn=N&p_item_category_code=200&p_cert_key=111&p_cert_id=222&p_returntype=json"
    );
    const fruitData = await fruitAPI.json();
    const vegetableData = await vegetableAPI.json();
    const cropsName = [
      ...new Set(fruitData.data.item.map((name) => name.item_name)),
      ...new Set(vegetableData.data.item.map((name) => name.item_name)),
    ];
    let cropsData = cropsName.map((crops, index) => ({
      name: crops,
      image: cropsImage[index],
    }));

    const connection = await connectDatabase();
    for (const { name, image } of cropsData) {
      await connection.query("INSERT INTO crops (name, img) VALUES (?, ?)", [
        name,
        image,
      ]);
    }
    connection.end();
  } catch (err) {
    console.error(err);
    throw err
  }
})();
