const express = require("express");
const { getCurrencies } = require("../controllers/exchange.controllers");
const convertQuerySchema = require("../validations/convertQuery");
const { queryValidator } = require("../middlewares/validator");
const { getConvertedRate } = require("../controllers/exchange.controllers");

const router = express.Router();

router.get("/currencies", getCurrencies);
router.get("/convert", queryValidator(convertQuerySchema), getConvertedRate)

module.exports = router;