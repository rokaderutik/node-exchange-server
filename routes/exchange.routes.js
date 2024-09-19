const express = require("express");
const { getCurrencies } = require("../controllers/exchange.controllers");

const router = express.Router();

router.get("/currencies", getCurrencies);

module.exports = router;