const FixedSupplyToken = artifacts.require('./FixedSupplyToken.sol')
 
module.exports = function (deployer, network, accounts) {
      
  const owner = accounts[0];
  deployer.deploy(FixedSupplyToken, {from: owner} );
 
}
