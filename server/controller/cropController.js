const { findCropsName, selectedCropInfo } = require("../db/crop.js");

exports.cropsName = async (req, res) => {
  try {
    const cropsData = await findCropsName();
    if (cropsData.length === 0) {
      res.json({ data: null });
    } else {
      res.json({ data: cropsData });
    }
  } catch (err) {
    console.error("데이터 조회 오류:", err);
    res.status(500).send("서버에서 오류가 발생했습니다.");
  }
};

exports.cropInfo = async (req, res) => {
  const { name } = req.query;
  console.log(name)
  try {
    const cropData = await selectedCropInfo(name);
    if (cropData.length === 0) {
      res.json({ data: null });
    } else {
      res.json({ data: cropData[0] });
    }
  } catch (err) {
    console.error("데이터 조회 오류:", err);
    res.status(500).send("서버에서 오류가 발생했습니다.");
  }
};
