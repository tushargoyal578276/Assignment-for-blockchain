const express = require('express');
const ethersService = require('../services/ethersService');

const router = express.Router();

router.post('/isValidAddress', async (req, res) => {
  try {
    const { address } = req.body;
    const isValid = await ethersService.isValidWalletAddress(address);
    res.status(200).json(isValid);
  } catch (error) {
    res.status(500).send('Internal server error');
  }
});

router.get('/createNewWallet', async (req, res) => {
  try {
    const wallet = ethersService.createWallet();
    res.status(200).json(wallet);
  } catch (error) {
    res.status(500).send('Internal server error');
  }
});

router.get('/getLatestTransactions1', async (req, res) => {
  try {
    const transactions = await ethersService.getLatestTransactions();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).send('Internal server error');
  }
});

module.exports = router;
