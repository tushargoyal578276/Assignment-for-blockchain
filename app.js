const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const ethersController = require('./controllers/ethersController');
const cctxController = require('./controllers/cctxController');

function start() {
  const app = express();
  app.use(helmet());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // Ethers.js API routes
  app.use('/api/ethers', ethersController);

  // cctx API routes
  app.use('/api/cctx', cctxController);

  const PORT = 7876;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = { start };
