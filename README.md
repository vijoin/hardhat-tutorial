# Instructions

```
# Install dependencies
npm install

# Execute tests
npm hardhat test

# local deployment
npx hardhat run scripts/deploy.js

# For ropsten deployment, change credentials
nano hardhat.config.js

# Change ALCHEMY_API_KEY and ROPSTEN_PRIVATE_KEY with actual values then run
npx hardhat run scripts/deploy.js --network ropsten
```