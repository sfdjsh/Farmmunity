const express = require("express");
const router = express.Router();
const cropController = require("./controller/cropController");

router.get("/name", cropController.cropsName);
router.get("/crop", cropController.cropInfo);

module.exports = router;
