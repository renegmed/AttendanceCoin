const routes = require('next-routes')();

routes
  .add('/', '/index') 
  .add('/index/:account', '/index') 
    // Transfer the balance from token owner's account to `to` account
    // - Owner's account must have sufficient balance to transfer
    // - 0 value transfers are allowed
  .add('/details/:account', '/index') 
  .add('/transfer/:account', '/transfer')  
    // Token owner can approve for `spender` to transferFrom(...) `tokens`
    // from the token owner's account
  .add('/approve/:account', '/approveTransfer') 
    // Transfer `tokens` from the `from` account to the `to` account
  .add('/transferFrom/:account', '/transferFrom')
    // Returns the amount of tokens approved by the owner that can be
    // transferred to the spender's account
  .add('/allowance/:account', '/allowance')
  .add('/changeownership/:account', '/changeOwnership')
  .add('/acceptownership/:account', '/acceptOwnership')
    // Token owner can approve for `spender` to transferFrom(...) `tokens`
    // from the token owner's account. The `spender` contract function
    // `receiveApproval(...)` is then executed
  //.add('/approveAndCall', '/approveAndCall')    
module.exports = routes;
