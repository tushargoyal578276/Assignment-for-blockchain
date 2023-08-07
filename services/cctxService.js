const ccxt = require('ccxt');

async function getTradableCoins() {
  try {
    const exchange = new ccxt.binance();
    const markets = await exchange.loadMarkets();
    const tradableCoins = Object.keys(markets);
    return tradableCoins;
  } catch (error) {
    console.error('Error fetching tradable coins:', error);
    return [];
  }
}

async function getAveragePrices() {
  try {
    const symbols = await getTradableCoins();
    const exchange = new ccxt.binance();
    const coinsWithAveragePrices = [];

    for (const symbol of symbols) {
      try {
        const trades = await exchange.fetchTrades(symbol);
        const recentTrades = trades.slice(-100);
        const totalPrices = recentTrades.reduce((acc, trade) => acc + trade.price, 0);
        const averagePrice = totalPrices / recentTrades.length;
        coinsWithAveragePrices.push({ symbol, averagePrice });
      } catch (error) {
        console.error(`Error fetching trades for ${symbol}:`, error);
      }
    }
    return coinsWithAveragePrices;
  } catch (error) {
    console.error('Error fetching coins with average prices:', error);
    return [];
  }
}

module.exports = { getTradableCoins, getAveragePrices };
