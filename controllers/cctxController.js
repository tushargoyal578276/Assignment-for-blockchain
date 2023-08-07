const express = require('express');
const cctxService = require('../services/cctxService');

const router = express.Router();

router.get('/getTradableCoinsList', async (req, res) => {
  try {
    const tradableCoins = await cctxService.getTradableCoins();
    res.status(200).json(tradableCoins);
  } catch (error) {
    res.status(500).send('Internal server error');
  }
});

router.get('/getAveragePricesList', async (req, res) => {
  try {
    const averagePrices = await cctxService.getAveragePrices();
    res.status(200).json(averagePrices);
  } catch (error) {
    res.status(500).send('Internal server error');
  }
});

module.exports = router;
