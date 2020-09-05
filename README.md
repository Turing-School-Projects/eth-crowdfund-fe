# vue-eth-crowdfund

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
[Click here to download Ganache](https://www.trufflesuite.com/ganache)

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
