<img src="https://i.imgur.com/UaAbv70.png" width="150" height="150" />

# Etho-Boost
[![Build Status](https://travis-ci.org/Eth-Crowdfund/eth-crowdfund-fe.svg?branch=main)](https://travis-ci.org/Eth-Crowdfund/eth-crowdfund-fe) 

## About  
[Etho-Boost](https://etho-boost-crowdfund.herokuapp.com/) is a crowdfunding platform that runs on the Ethereum blockchain. It the capstone/cross-pollination project built by 6 students at Turing School of Software and Design in their 4th and final module. Powered by smart-contracts deployed to the Ethereum Virtual Machine(EVM), Etho-Boost gives donors the power to review and approve withdrawal requests from the Boosters(campaigns) they have donated to, ensuring that donations are used as advertised.

## Team

### Blockchain/Front End

[Jack Cullen](https://github.com/jpc20)

### Front End

[Andy Tom](https://github.com/attom2)

[Edwin Montealvo](https://github.com/edmdc89)

### [Back-End](https://github.com/Eth-Crowdfund/eth_crowdfund_be) 

[Antonio Jackson](https://github.com/AntonioJacksonII)

[Ross Perry](https://github.com/perryr16)

[Taylor Keller](https://github.com/takeller)

## Demo

[![](http://img.youtube.com/vi/0h1UFCdixyE/0.jpg)](https://www.youtube.com/watch?v=6TcHf7m1w40&feature=emb_title "Etho-Boost Demo")

## Why? 

#### Trust  
 The untrustworthy nature of crowdfunding websites deters potential donors because there is no accountability. Fundraisers are not expected to publish honest, detailed information about where a donated dollar goes, and EthoBoost demands more transparency. 
EthoBoost gives donors the power to review and approve requests to withdraw funds before a manager can complete a withdrawal, ensuring that donations are used as advertised. Fund managers set a minimum value that a donor must contribute in order to have approval rights for that fund. A fund manager must create a request to withdraw donations, and the request must be approved by over 50% of ‘approvers’ for the campaign.

#### Borderless and Bankless  
 Today’s financial system makes it extremely difficult to send and receive money across borders, forcing crowdfunding platforms to restrict transactions by imposing fees on international donations. EthoBoost is built on the Ethereum blockchain, granting donors and fundraisers the freedom to exchange funds without the constraints of a traditional bank account from any specific country. 
 
 #### Transactions(Fees and time) 
 Crowdfunding platforms generally charge a 5% transaction fee, and transactions take at least 3-5 business days to complete. Facilitated by the Ethereum blockchain, EthoBoosts transactions cost just a few cents and finalize in 30 seconds.


## Tech

### Front End
  - Vue.js
  - Jest
  - TravisCI
  - Heroku 
  - HTML/SCSS
### Blockchain
  - Solidity
  - Truffle
  - Ganache
  - Metamask
  - Web3
### [Back-End](https://github.com/Eth-Crowdfund/eth_crowdfund_be) 
  - Python 
  - Flask
  - pytest
  - PostgreSQL
  - SQLAlchemy

## Future Iterations
  * Transition to a stable coin(DAI, USDC, USDT, etc.)
  * Mobile App/PWA
  * Deploy to the Main Ethereum Network
  * Increase functionality around requests

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Ethereum setup

### Download Truffle  
Truffle provides a development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM).  
To get started install truffle:
```
npm install -g truffle
```

### Download Ganache
Ganache is a personal blockchain for Ethereum development you can use to deploy contracts, develop applications, and run tests. It is available as both a desktop application as well as a command-line tool.
[Click here to download the desktop app.](https://www.trufflesuite.com/ganache)

### Connect to Ganache
- Open Ganache and select `New Workspace`  
- Under `Truffle Projects` select `Add Project` and enter the file path of `truffle-config.js` for this repo.
- Click the `Server` tab and make sure `Port Number` is `8545`
- Click `Save Workspace` and you should see a list of accounts with 100 ether each.

### Migrate the Contracts  
This will compile and deploy the smart contracts to your local Ganache blockchain.  
```
truffle migrate
```

### Run the contract tests
```
truffle test
```
