  
//const web3 = require('../node_modules/web3/src/index');
const fixedSupplyToken = artifacts.require('./FixedSupplyToken.sol');
const TOTAL_TOKEN_SUPPLY = 1000000000000000000000000000;

contract('FixedSupplyToken', (accounts) => {
   let fixedSupplyTokenInstance;
   
   beforeEach(async () => {
    // redeploy contract to start with clean slate.
    fixedSupplyTokenInstance = await fixedSupplyToken.new({from: accounts[0]});  

    const deployer = await fixedSupplyTokenInstance.owner();    
    const owner = accounts[0];     

    assert(owner == deployer, "Contract deployer and owner should be the same.");

    const totalSupply = await fixedSupplyTokenInstance.totalSupply();
  
    assert.equal(totalSupply.toNumber(), TOTAL_TOKEN_SUPPLY, 
        "Owner tokens after contract deployment must have " + TOTAL_TOKEN_SUPPLY); 
   });

  it('...should be able to create an intance of Fixed Supply Token', async () => {
    const fixedSupplyTokenInstance = await fixedSupplyToken.deployed();
            
    assert.ok(fixedSupplyTokenInstance, 'Fixed Supply Token instance was not created.');    
   
    const deployer = await fixedSupplyTokenInstance.owner();    
    const owner = accounts[0];
    
    assert(owner == deployer, "Contract deployer and owner should be the same.");

  });

  it('...owner can transfer ownership to other.', async () => {
 
    const fixedSupplyTokenInstance = await fixedSupplyToken.deployed();
    const oldOwner = await fixedSupplyTokenInstance.owner();
    const candidateOwner = accounts[1];
    await fixedSupplyTokenInstance.transferOwnership(candidateOwner, {from: oldOwner});
    await fixedSupplyTokenInstance.acceptOwnership({from: candidateOwner});
    const newOwner = await fixedSupplyTokenInstance.owner();  

    assert(newOwner == candidateOwner, "Contract should have a new owner");
    assert(newOwner != oldOwner, "Contract should no have the previous owner");
  });

 
  it('...owner has all the total supply of tokens after deployment.', async () => { 

    const owner = await fixedSupplyTokenInstance.owner();

    var balance = await fixedSupplyTokenInstance.balanceOf(owner);
    
    assert.equal(balance.toNumber(), TOTAL_TOKEN_SUPPLY, "Total token supply should have been distributed to the owner");
    
    balance = await fixedSupplyTokenInstance.balanceOf(accounts[1]);
    assert.equal(balance.toNumber(), 0, "Total token supply should not have distributed to 2nd account");
    
    balance = await fixedSupplyTokenInstance.balanceOf(accounts[2]);
    assert.equal(balance.toNumber(), 0, "Total token supply should not have distributed to 3rd account");
    
    balance = await fixedSupplyTokenInstance.balanceOf(accounts[3]);
    assert.equal(balance.toNumber(), 0, "Total token supply should not have distributed to 4th account");
    
    balance = await fixedSupplyTokenInstance.balanceOf(accounts[4]);
    assert.equal(balance.toNumber(), 0, "Total token supply should not have distributed to 5th account");
    
    balance = await fixedSupplyTokenInstance.balanceOf(accounts[6]);
    assert.equal(balance.toNumber(), 0, "Total token supply should not have distributed to 6th account");
  });


  it('...owner transfers some tokens to account other account.', async () => {
     
    const owner = await fixedSupplyTokenInstance.owner();
    const ownerToken = TOTAL_TOKEN_SUPPLY;
    const transferTo = accounts[2];
    const transferredToken = 15000;

    const success = await fixedSupplyTokenInstance.transfer(transferTo, transferredToken, {from: owner});

    assert(success, "Owner should be available to transfer tokens to other account");

    const ownerNewBalance = await fixedSupplyTokenInstance.balanceOf(owner);    
    const transferToNewBalance = await fixedSupplyTokenInstance.balanceOf(transferTo);    

    assert.equal(ownerNewBalance, ownerToken - transferredToken, "Owner new token balance should be " + (ownerToken - transferredToken));
    assert.equal(transferToNewBalance, transferredToken , "Transferred To account should have a balance of " + transferredToken);

  });

  it('...transfers some tokens from one account to another.', async () => {
     
    const owner = await fixedSupplyTokenInstance.owner();
    const ownerToken = TOTAL_TOKEN_SUPPLY;
    const account_1 = accounts[1];
    const account_2 = accounts[2];
    const transferredToken_1 = 25000;

    var success = await fixedSupplyTokenInstance.transfer(account_1, transferredToken_1, {from: owner});
    assert(success, "Owner should be available to transfer tokens to account 1");

    const ownerNewBalance = await fixedSupplyTokenInstance.balanceOf(owner);        
    const account_1_NewBalance = await fixedSupplyTokenInstance.balanceOf(account_1);    

    assert.equal(ownerNewBalance, ownerToken - transferredToken_1, "Owner new token balance should be " + (ownerToken - transferredToken_1));
    assert.equal(account_1_NewBalance, transferredToken_1 , "Transferred To account 1 should have a balance of " + transferredToken_1);

    // transfer some tokens from account 1 to account 2
   
    const transferredToken_2 = 15000;
    const account1_oldBalance = await fixedSupplyTokenInstance.balanceOf(account_1);     
    const account2_oldBalance = await fixedSupplyTokenInstance.balanceOf(account_2);
    
    const account1_newBalance = (account1_oldBalance.toNumber()) - transferredToken_2;
    const account2_newBalance = (account2_oldBalance.toNumber()) + transferredToken_2;
    
    var remainingAllowance = await fixedSupplyTokenInstance.allowance(account_1, account_1);
    assert.equal(remainingAllowance, 0, "There should be no token allocated for transfer");

    // The account 1 (spender) first needs to approve to spend the token (15000)
    success = await fixedSupplyTokenInstance.approve(account_1, transferredToken_2, {from: account_1});
    assert(success, "Account 1 should approve to spend the token of " + transferredToken_2);

    remainingAllowance = await fixedSupplyTokenInstance.allowance(account_1, account_1);
    assert.equal(remainingAllowance, transferredToken_2, "There should be tokens allocated for transfer - " + transferredToken_2);

    // The actual transfer of tokens to be made by account 1
    success = await fixedSupplyTokenInstance.transferFrom(account_1, account_2, transferredToken_2, {from: account_1});
    assert(success, "Not able to transfer tokens from one account 1 to account 2"); 

    const account1_balance = await fixedSupplyTokenInstance.balanceOf(account_1);    
    const account2_balance = await fixedSupplyTokenInstance.balanceOf(account_2);    

    assert.equal(account1_balance.toNumber(), account1_newBalance, "Account 1 should have a balance of " + account1_newBalance);
    assert.equal(account2_balance.toNumber(), account2_newBalance, "Account 2 should have a balance of " + account2_newBalance);

  });
});  

