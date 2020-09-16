<img src="https://etho-boost-crowdfund.herokuapp.com/img/etho-boost-logo.4782e5fe.png" width="150" height="150" />

# Etho-Boost
[![Build Status](https://travis-ci.org/Eth-Crowdfund/eth-crowdfund-fe.svg?branch=main)](https://travis-ci.org/Eth-Crowdfund/eth-crowdfund-fe) 

[Etho-Boost](https://etho-boost-crowdfund.herokuapp.com/) is a crowdfunding platform that runs on the Ethereum blockchain. It the capstone/cross-pollination project built by 6 students at Turing School of Software and Design in their 4th and final module. Powered by smart-contracts deployed to the Ethereum blockchain, Etho-Boost gives donors the power to approve withdrawal requests ensuring that donations are used as advertised.

## Team

### Blockchain/Front End

[Jack Cullen](https://github.com/jpc20)

### Front End

[Andy Tom](https://github.com/attom2)

[Edwin Montealvo](https://github.com/edmdc89)

### Back End

[Antonio Jackson](https://github.com/AntonioJacksonII)

[Ross Perry](https://github.com/perryr16)

[Taylor Keller](https://github.com/takeller)

## Tech

  - 

The [back-end](https://github.com/Eth-Crowdfund/eth_crowdfund_be) for this project was built in Python with a Flask framework.

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
