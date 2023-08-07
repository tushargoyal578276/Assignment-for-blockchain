const ethers = require('ethers');

function isValidWalletAddress(address) {
  return ethers.isAddress(address);
}

function createWallet() {
  const wallet = ethers.Wallet.createRandom();
  return {
    address: wallet.address,
    privateKey: wallet.privateKey,
  };
}

async function processTransactions(transactions) {
  const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/7ff8bf868e294334932f55f91a2ba7bb');
  const receipts = [];

  await Promise.all(transactions.map(async (transactionHash) => {
    try {
      const receipt = await provider.getTransaction(transactionHash);
      const txDetails = {
        transactionHash: receipt.hash,
        sender: receipt.from,
        receiver: receipt.to,
        amount: ethers.formatEther(receipt.value),
        blockNumber: receipt.blockNumber,
      };
      receipts.push(txDetails);
    } catch (error) {
      console.error('Error fetching receipt for transaction:', transactionHash);
    }
  }));

  const txn = receipts.sort((tx1, tx2) => {
    const amount1 = parseFloat(tx1.amount);
    const amount2 = parseFloat(tx2.amount);
    return amount2 - amount1;
  });
  return txn;
}

async function getLatestTransactions() {
  const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/7ff8bf868e294334932f55f91a2ba7bb');
  const blockNumber = await provider.getBlockNumber();
  const transactions = [];
  const promises = [];

  for (let i = 0; i < 10; i += 1) {
    promises.push(provider.getBlock(blockNumber - i));
  }
  const blocks = await Promise.all(promises);

  blocks.forEach((block) => {
    if (block.transactions) {
      transactions.push(...block.transactions);
    }
  });

  const trxn = await processTransactions(transactions.slice(0, 1000))
    .then((receipts) => {
      console.log('All receipts fetched successfully.');
      return receipts;
    })
    .catch((error) => {
      console.error('Error processing transactions:', error);
    });

  return trxn;
}

module.exports = {
  isValidWalletAddress,
  createWallet,
  getLatestTransactions,
};
