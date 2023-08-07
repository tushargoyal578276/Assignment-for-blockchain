# API Documentation

# npm install

# npm start

## Ethers API

### 1. Validate Wallet Address

**Endpoint:** `/api/ethers/isValidAddress`

**Method:** POST

**Description:** Checks if the given Ethereum wallet address is valid.

**Parameters:**
- `address` (string, required): The Ethereum wallet address to validate.

**Response:**
- `isValid` (boolean): `true` if the address is valid, `false` otherwise.

### 2. Create Wallet

**Endpoint:** `/api/ethers/createNewWallet`

**Method:** GET

**Description:** Creates a new Ethereum wallet.

**Response:**
- `address` (string): The newly generated Ethereum wallet address.
- `privateKey` (string): The newly generated Ethereum wallet address private key.

### 3. Get Latest 1000 Ethereum Transactions

**Endpoint:** `/api/ethers/getLatestTransactions1`

**Method:** GET

**Description:** Fetches the latest 1000 Ethereum transactions sorted by etherium quantity.

**Response:**
  - `hash` (string): Transaction hash.
  - `sender` (string): Sender address.
  - `receiver` (string): Receiver address.
  - `amount` (number): Amount of ether transferred.
  - `blockNumber` (number): Block number.

## cctx API

### 1. Get Tradable Coins on Binance

**Endpoint:** `api/cctx/getTradableCoinsList`

**Method:** GET

**Description:** Fetches the list of coins that are tradable on Binance.

**Response:**
- `Tradable coins on Binance` (array): Array of coin objects, each containing:


### 2. Get Tradable Coins Average Prices List on Binance

**Endpoint:** `api/cctx/getAveragePricesList`

**Method:** GET

**Description:** Fetches the list of coins average prices that are tradable on Binance.

**Response:**
  - `symbol` (string): Coin name.
  - `averagePrice` (number): Average price of 100 recent transactions.

